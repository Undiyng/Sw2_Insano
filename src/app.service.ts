import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';
@Injectable()
export class AppService {
  async renderHtml(res: Response) {
    const filePath = join(__dirname,'media','index.html');
    res.sendFile(filePath)
  }
}
