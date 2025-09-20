import {AxiosError} from "axios";

export type ResponseTypes<ResponseList> = {
  status: number;
  validation?: Array<string>;
  data: ResponseList;
  pagination?: PaginationTypes<ResponseList>;
  token: string;
  message?: string;
};

export type ErrorResponseType = {
  status: number;
  message: string;
  error_details: string;
  validation_errors: Array<string>;
  content: any;
};

export type LinkType = {
  url?: string;
  label: string;
  active: boolean;
};
export type PaginationTypes<T> = {
  current_page: number;
  first_page_url: string;
  last_page: string;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: string;
  prev_page_url: string;
  from: string;
  to: string;
  total: number;
  data: T[];
  links?: LinkType[];
};

export type APIError = {
  code: number;
  message: string;
  status: string;
  validation?: {[key: string]: string[]};
  errors?: {[x: string]: string};
};
export type ErrorType = AxiosError<APIError>;

export type RegisterError = {
  code: number;
  message: string;
  status: string;
  validation?: {[key: string]: string[]};
};



export type RegisterErrorType = AxiosError<RegisterError>;
