import { Injectable } from '@nestjs/common';
import { PostDto } from './dtos/PostDto';
const Reverso = require('reverso-api');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async callTranslate(el) {
    const reverso = new Reverso();
    try {
      return await reverso.getTranslation(el.text, 'english', 'portuguese');
    } catch (e) {
      return {
        ok: '',
        text: '',
        source: '',
        target: '',
        translations: [''],
        detected_language: '',
        voice: '',
        context: {
          examples: [''],
          rude: '',
        },
      };
    }
  }

  async translateSentences(payload: PostDto) {
    const { sentences } = payload;
    const promises = sentences.map((el) => {
      return this.callTranslate(el);
    });

    return await Promise.all(promises);
  }
}
