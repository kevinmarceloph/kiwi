import { IErrorMiddleware } from '../src/middlewares/errorMiddleware';
import { MiddlewareError } from '../src/decorators/middlewareError';
import * as http from 'http';
import { Utils } from './utils';

@MiddlewareError(1)
export class TestMiddleware3 implements IErrorMiddleware{

    execute(error: any, request: http.IncomingMessage, response: http.ServerResponse, next: any){
        response.writeHead(500);
        response.end( `ERROR: ${error}` );
    }
}
