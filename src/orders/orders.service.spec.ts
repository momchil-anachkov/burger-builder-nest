import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { AXIOS } from '../core/tokens';

describe('OrdersService', () => {
  let service: OrdersService;
  let axios: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: AXIOS,
          useValue: {
            post: () => Promise.resolve({}),
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    axios = module.get<any>(AXIOS);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call axios post once on save', () => {
    const axiosPost = jest.spyOn(axios, 'post');
    service.saveOrder({});
    expect(axiosPost).toBeCalledTimes(1);
  });

});
