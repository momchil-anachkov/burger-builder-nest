import { Test, TestingModule } from '@nestjs/testing';
import { IngredientsService } from './ingredients.service';
import { AXIOS } from '../core/tokens';
import { AxiosInstance } from 'axios';
import { HttpException } from '@nestjs/common';

const errorMessage = 'Test error';

const mockAxiosMethodRejection = (axios: AxiosInstance, method) => {
  axios[method] = () => {
    return Promise.reject({
      message: errorMessage,
      response: {
        status: 401,
      },
    });
  };
};

const assertHttpExceptionError = (error: HttpException) => {
  expect(error).toBeInstanceOf(HttpException);
  expect(error.getStatus()).toBe(401);
  expect(error.getResponse()).toBe(errorMessage);
};

describe('IngredientsService', () => {
  let service: IngredientsService;
  let axios: AxiosInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IngredientsService,
        {
          provide: AXIOS,
          useValue: {
            get: () => Promise.resolve({}),
          },
        },
      ],
    }).compile();

    axios = module.get<AxiosInstance>(AXIOS);
    service = module.get<IngredientsService>(IngredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should call axios.get once', () => {
      const axiosGet = jest.spyOn(axios, 'get');
      service.getAll('dummy_auth_token');
      expect.assertions(1);
      expect(axiosGet).toHaveBeenCalledTimes(1);
    });

    it('should throw an HttpException on network error', () => {
      mockAxiosMethodRejection(axios, 'get');
      const getAllIngredients = jest.spyOn(service, 'getAll');
      expect.assertions(4);
      expect(getAllIngredients).toThrow();
      service.getAll('dummy_auth_token').catch((error) => {
        assertHttpExceptionError(error);
      });
    });
  });
});
