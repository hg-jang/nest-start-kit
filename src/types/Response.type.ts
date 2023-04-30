/**
 * Response type with error
 */
export type ResponseError = {
  state: 'error';
  code: number;
  message: string;
  timestamp: string;
};

/**
 * Response type with success
 */
export type ResponseSuccess<T> = {
  state: 'ok';
  data: T;
};
