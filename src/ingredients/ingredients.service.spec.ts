import { Test, TestingModule } from '@nestjs/testing';
import { IngredientsService } from './ingredients.service';
import { AXIOS } from '../core/tokens';
import { AxiosInstance } from 'axios';

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
  });
});
