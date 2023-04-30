import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

import { ResponseError } from 'src/types/Response.type';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response<ResponseError>>();
    const req = ctx.getRequest<Request>();

    const path = httpAdapter.getRequestUrl(ctx.getRequest());
    const exceptionMessage = exception.getResponse() as string;
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const statusCodeMessage = HttpStatus[statusCode] || 'Internal Server Error';

    res.status(statusCode).json({
      state: 'error',
      message: `${statusCodeMessage} - ${exceptionMessage}`,
      timestamp: new Date().toISOString(),
      code: statusCode,
    });
  }
}
