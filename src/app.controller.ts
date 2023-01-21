import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostDto } from './dtos/PostDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async getSentences(@Body() payload: PostDto) {
    const response = this.appService.translateSentences(payload);
    return response;
  }
}
