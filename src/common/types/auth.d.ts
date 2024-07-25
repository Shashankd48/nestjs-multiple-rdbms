import { User } from 'src/database-silos/master/entities/';

// Never used ?!
//export type TCreateTokenPayload = {
//  username: string;
//  sub: string;
//  roles: { id: string; name: string }[];
//  companies: { id: string; name: string }[];
//};

export type TCreateTokenResponse = {
  accessToken: string;
  cookieToken: string;
};

export type TValidateUserRes = {
  user: User | null;
  isVerified: boolean;
  isValidAttempt: boolean;
};

export type TAuthUser = {
    id: number;
    user: string;
    currentCompany: number;
    currentRole: number;
};
