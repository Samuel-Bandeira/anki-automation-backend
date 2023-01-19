import { Injectable } from '@nestjs/common';
import { PostDto } from './dtos/PostDto';
const Reverso = require('reverso-api');
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  translateSentences(payload: PostDto) {
    const reverso = new Reverso();
    reverso.getTranslation(
      payload.text,
      payload.from,
      payload.to,
      (err, response) => {
        if (err) throw new Error(err.message);

        console.log(response);
      },
    );
  }
}
