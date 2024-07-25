import { HttpException, HttpStatus } from '@nestjs/common';
import { TBadRequestParams } from '../types/res';

export function res500(
  error: { name: any; message: any },
  payload: TBadRequestParams,
) {
  const { errorCode, data } = payload;
  throw new HttpException(
    {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      error: error.name,
      message: error.message || 'Internal Server Error',
      errorCode,
      data: data || null,
    },
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
}

export function duplicateRecordRes(message: string, data?: any) {
  return {
    statusCode: HttpStatus.CONFLICT,
    error: 'Duplicate Entry',
    message,
    data: data || null,
  };
}

export function badRequestRes(message: string, payload: TBadRequestParams) {
  const { errorCode, data } = payload;
  return {
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message,
    errorCode,
    data: data || null,
  };
}

export function unAuthorizedRes(message?: string) {
  return {
    statusCode: HttpStatus.UNAUTHORIZED,
    error: 'Forbidden',
    message: message || 'Resource forbidden, access denied!',
  };
}

export function successRes(data?: any, message?: string) {
  return {
    data,
    statusCode: HttpStatus.CREATED,
    message: message || 'Success',
    error: false,
  };
}
