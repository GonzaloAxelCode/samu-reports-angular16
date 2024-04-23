export interface UserState {
  data?: UserProfile;
  isLoadingUserDetail?: boolean;
  isLoadingNickname?: boolean;
  isLoadingFirstName?: boolean;
  isLoadingLastName?: boolean;
  isLoadingPhoto?: boolean;
  isLoadingLocation?: boolean;
  isLoadingBirthdate?: boolean;
  isLoadingPhoneNumber?: boolean;
  errors?: any;
  isLoadingDeleteAccount?: boolean;
  isLoadingDesactivateAccount?: boolean;
  isLoadingActivateAccount?: boolean;
  isLoadingResetPassword?: boolean;
  isLoadingChangeEmail?: boolean;
  isLoadingChangePassword?: boolean;
  isLoadingConfirmationChangePassword?: boolean;
  emailChangedSuccessfully?: boolean;
}

export interface UserProfile {
  id?: number;
  last_login?: Date | null;
  email?: string;
  nickname?: string;
  first_name?: string;
  last_name?: string;
  photo_url?: string;
  date_joined?: string;
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  desactivate_account?: boolean;
  groups?: any[];
  user_permissions?: any[];
  location?: string;
  birthdate?: Date | null | string;
  phone_number?: string;
  user?: number;
}
