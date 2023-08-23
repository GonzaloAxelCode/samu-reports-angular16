export interface AuthState {
  errors?: AuthErrors;
  loadings?: AuthLoadings;
  isAuthenticated?: boolean;
  accessToken?: string;
  refreshToken?: string;
}

export interface AuthLoadings {
  isLoadingLogin?: boolean;
  isLoadingVerifyToken?: boolean;
  isLoadingRegister?: boolean;
}

export interface AuthErrors {
  detail?: string;
  new_password?: string[];
  non_field_errors?: string[];
  token?: string[];
  current_password?: string[];
}

export interface Tokens {
  access?: string;
  refresh?: string;
}

export interface UserAuth {
  email?: string;
  password?: string;
}

export interface PostResponse extends Tokens {}

export interface TokenPair {
  accessToken?: string;
  refreshToken?: string;
}

export interface ServiceFetchResponse {
  networkError: boolean;
  errors: any;
  data: any;
  isSuccess: boolean;
  HTTPstatus: number;
}

export interface LoginType {
  email?: string;
  password?: string;
}
export interface RegisterType {
  firstname?: string;
  lastname?: string;
  nickname?: string;
  email?: string;
  password?: string;
  re_password?: string;
}
