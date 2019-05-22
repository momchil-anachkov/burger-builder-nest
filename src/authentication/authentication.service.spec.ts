import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { AXIOS } from '../core/tokens';
import { AxiosInstance } from 'axios';

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
  });

  describe('signIn', () => {
    it('should call axios.post once on signin', () => {
      const axiosPost = jest.spyOn(axios, 'post');
      service.signIn({} as any);
      expect(axiosPost).toHaveBeenCalledTimes(1);
    });
  });
});
