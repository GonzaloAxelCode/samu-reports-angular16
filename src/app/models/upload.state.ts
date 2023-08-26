export interface UploadState {
  isLoading?: boolean;
  errors?: any;
  data?: any;
  infoUpload?: any;
  registros?: any;
  isLoadingLoadRegistros?: boolean;
}

export interface UploadCsvData {
  file: File;
  nameModel: string;
  encode: string;
  delimiter: string;
}
