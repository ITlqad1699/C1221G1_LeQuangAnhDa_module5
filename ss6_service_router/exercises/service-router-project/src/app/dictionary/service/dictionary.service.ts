import {Injectable} from '@angular/core';
import {Vocabulary} from '../models/vocabulary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  vocalbulary: Vocabulary;
  vocabularies: Vocabulary[] = [
    {
      id: 1,
      english: 'dog',
      vietnamese: 'chó',
      detail: 'loài động vật có vú  đi bằng 4 chi rất thân thiện với loài người'
    },
    {
      id: 2,
      english: 'cat',
      vietnamese: 'mèo',
      detail: 'loài động vật có vú  đi bằng 4 chi rất thân thiện với loài người'
    },
    {
      id: 3,
      english: 'tiger',
      vietnamese: 'hỗ',
      detail: 'loài động vật có vú  đi bằng 4 chi, mệnh danh là chúa sơn lâm'
    },
    {
      id: 4,
      english: 'elephant',
      vietnamese: 'voi',
      detail: 'loài động vật có vú  đi bằng 4 chi, miệng mọc 2 chiếc sừng gọi là ngà voi'
    },
    {
      id: 5,
      english: 'dolphin',
      vietnamese: 'cá heo',
      detail: 'loài động vật có vú  đi sống ở đại dương rất thân thiện với loài người'
    },
    {
      id: 6,
      english: 'shark',
      vietnamese: 'cá mập',
      detail: 'sát thủ biển sâu, đi dễ khó về'
    }
  ];

  public findByEnglish(english: string) {
    return this.vocabularies.find(vocabulary => vocabulary.english = english);
  }

  public findVietNamese(english: string) {
    this.vocalbulary = this.findByEnglish(english);
    return this.vocalbulary.vietnamese;
  }

  public getAll() {
    return this.vocabularies;
  }
}
