import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { ResponseSuccess } from 'src/types/Response.type'

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<ResponseSuccess<T>> {
    return next.handle().pipe(
      map(data => {
        const res: ResponseSuccess<T> = {
          state: 'ok',
          data: data
        }

        return res
      })
    );
  }
}
