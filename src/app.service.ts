import { Injectable } from '@nestjs/common';
import { PostDto } from './dtos/PostDto';
const Reverso = require('reverso-api');

// interface ReversoResponseItemI {
//   ok: string;
//   text: string;
//   source: string;
//   target: string;
//   translations: string[];
//   detected_language: string;
//   voice: string;
//   context: {
//     examples: string[];
//     rude: string;
//   };
// }

// interface ReversoResponseI extends Array<ReversoResponseItemI> {}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async translateSentences(payload: PostDto) {
    const { sentences } = payload;
    const reverso = new Reverso();

    return await Promise.all(
      sentences.map((el) => {
        return reverso.getTranslation(el.text, 'english', 'portuguese');
      }),
    );
  }
}
