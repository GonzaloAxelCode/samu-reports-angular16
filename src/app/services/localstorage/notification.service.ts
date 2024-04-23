// token-utils.ts

import { TokenPair } from 'src/app/models/auth.model';

export function getTokensFromLocalStorage(): TokenPair {
  if (typeof window !== 'undefined' && window.localStorage) {
    const accessToken = localStorage?.getItem('accessToken') || '';
    const refreshToken = localStorage?.getItem('refreshToken') || '';
    return {
      accessToken: accessToken || '',
      refreshToken: refreshToken || '',
    };
  }
  return {
    accessToken: '',
    refreshToken: '',
  };
}

export function saveTokensToLocalStorage(tokens: TokenPair) {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('accessToken', tokens?.accessToken || '');
    localStorage.setItem('refreshToken', tokens?.refreshToken || '');
  }
}

export function clearTokensLocalstorage() {
  localStorage?.removeItem('accessToken');
  localStorage?.removeItem('refreshToken');
}

export function saveActivationActivePagePageLocalStorage(enabled: boolean) {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('page_activation_enabled', enabled ? 'true' : 'false');
  }
}

export function getIsActivationActivePageLocalStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const isEnabled =
      localStorage?.getItem('page_activation_enabled') === 'true';

    return isEnabled;
  }
  return false;
}
//
export function saveResetPasswordPageLocalStorage(enabled: boolean) {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(
      'page_reset_password_enabled',
      enabled ? 'true' : 'false'
    );
  }
}

export function getIsResetPasswordPageLocalStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const isEnabled =
      localStorage?.getItem('page_reset_password_enabled') === 'true';

    return isEnabled;
  }
  return false;
}
