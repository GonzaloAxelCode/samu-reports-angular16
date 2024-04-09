export interface UploadState {
  isLoading?: boolean;
  errors?: any;
  data?: any;
  infoUpload?: any;
  registros?: any;
  nameModel?: string;
  isLoadingLoadRegistros?: boolean;
  dataModels?: any;
  isLoadingLoadDataModels?: boolean;
  isLoadingEmptyModelRecords?: boolean;
}

export interface UploadCsvData {
  file: File;
  nameModel: string;
  encode: string;
  delimiter: string;
}
