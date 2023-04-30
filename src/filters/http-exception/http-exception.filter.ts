import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

import { ResponseError, ResponseStatus } from 'src/types/Response.type';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response<ResponseError>>();
    const req = ctx.getRequest<Request>();

    const exceptionMessage = exception.getResponse() as string
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    res
      .status(statusCode)
      .json({
        state: 'error',
        message: exceptionMessage,
        timestamp: new Date().toISOString(),
        path: httpAdapter.getRequestUrl(ctx.getRequest()),
        code: statusCode,
        status: ResponseStatus[404],
      })
  }
}
