import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { AXIOS } from '../core/tokens';
import { AxiosInstance } from 'axios';
import { HttpException } from '@nestjs/common';

const errorMessage = 'Test error';

const mockAxiosMethodRejection = (axios: AxiosInstance, method) => {
  axios[method] = () => {
    return Promise.reject({
      message: errorMessage,
      response: {
        status: 404,
      },
    });
  };
};

const assertHttpExceptionError = (error: HttpException) => {
  expect(error).toBeInstanceOf(HttpException);
  expect(error.getStatus()).toBe(404);
  expect(error.getResponse()).toEqual({ message: errorMessage});
};

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let axios: AxiosInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthenticationService,
        {
          provide: AXIOS,
          useValue: {
            post: () => Promise.resolve({} as any),
          },
        },
      ],
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
    axios = module.get<AxiosInstance>(AXIOS);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signUp', () => {
    it('should call axios.post once', () => {
      const axiosPost = jest.spyOn(axios, 'post');
      service.signUp({} as any);
      expect(axiosPost).toHaveBeenCalledTimes(1);
    });

    it('should throw an HttpException on network error', () => {
      mockAxiosMethodRejection(axios, 'post');
      const signUp = jest.spyOn(service, 'signUp');
      expect.assertions(4);
      expect(signUp).toThrow();
      service.signIn({} as any).catch((error: HttpException) => {
        assertHttpExceptionError(error);
      });
    });
  });

  describe('signIn', () => {
    it('should call axios.post once', () => {
      const axiosPost = jest.spyOn(axios, 'post');
      service.signIn({} as any);
      expect(axiosPost).toHaveBeenCalledTimes(1);
    });

    it('should throw an HttpException on network error', () => {
      mockAxiosMethodRejection(axios, 'post');
      const signIn = jest.spyOn(service, 'signIn');
      expect.assertions(4);
      expect(signIn).toThrow();
      service.signIn({} as any).catch((error: HttpException) => {
        assertHttpExceptionError(error);
      });
    });
  });
});
