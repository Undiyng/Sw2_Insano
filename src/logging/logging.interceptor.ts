import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();

 
    const userAgent = req.get('user-agent') || '';
    const content_type = req.get('content-type') || '';
    const date = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Caracas',
      hour12: true,
    });
    const ip:string = req.ip === '::1' ? '127.0.0.1' : req.ip;
    const method:string = req.method
    const originalUrl:string = req.originalUrl
    const user = (req as any).user || { userId: 'No autenticado', email: 'No autenticado', typo: 'No autenticado' };
    const host:string = req.headers.host;
    const auth:string = req.headers.authorization;
    console.log(
`--------------------------------------------------
[${date}] Metodo: ${method} Ruta de acceso: ${originalUrl}\n` +
      `IP: ${ip}\n` +
      `User Agent: ${userAgent}\n` +
      `datos del cliente : ${JSON.stringify(user, null, 2)} \n`
    );
    if(req.body != undefined) console.log(`body: \n ${JSON.stringify(req.body,null,2)} \n`);
    console.log(`Headers:{
      "content-type":"${content_type}"
      "Token" : "${auth}",
      "Host": "${host}"
      }`);
    return next.handle();
  }
}