import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
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
  expect(error.getResponse()).toBe(errorMessage);
};

describe('OrdersService', () => {
  let service: OrdersService;
  let axios: AxiosInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: AXIOS,
          useValue: {
            post: () => Promise.resolve({} as any),
            get: () => Promise.resolve({} as any),
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    axios = module.get<AxiosInstance>(AXIOS);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('saveOrder', () => {
    it('should call axios.post once', () => {
      const axiosPost = jest.spyOn(axios, 'post');
      service.saveOrder('dummy_auth_token', {});
      expect(axiosPost).toHaveBeenCalledTimes(1);
    });

    it('should throw an HttpException on network error', () => {
      mockAxiosMethodRejection(axios, 'post');
      const getAllOrders = jest.spyOn(service, 'saveOrder');
      expect.assertions(4);
      expect(getAllOrders).toThrow();
      service.saveOrder('dummy_auth_token', {}).catch((error) => {
        assertHttpExceptionError(error);
      });
    });
  });

  describe('getAll', () => {
    it('should call axios.get once', () => {
      const axiosGet = jest.spyOn(axios, 'get');
      service.getAll('dummy_auth_token');
      expect(axiosGet).toHaveBeenCalledTimes(1);
    });

    it('should throw an HttpException on network error', () => {
      mockAxiosMethodRejection(axios, 'get');
      const getAllOrders = jest.spyOn(service, 'getAll');
      expect.assertions(4);
      expect(getAllOrders).toThrow();
      service.getAll('dummy_auth_token').catch((error: HttpException) => {
        assertHttpExceptionError(error);
      });
    });
  });
});
