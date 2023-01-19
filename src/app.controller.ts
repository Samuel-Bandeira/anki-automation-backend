import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostDto } from './dtos/PostDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getSentences(@Body() payload: PostDto) {
    return this.appService.translateSentences(payload);
  }
}
