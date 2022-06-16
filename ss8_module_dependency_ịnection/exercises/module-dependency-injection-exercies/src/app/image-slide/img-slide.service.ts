import {Injectable} from '@angular/core';
import {Image} from './image';

@Injectable({
  providedIn: 'root'
})
export class ImgSlideService {
  images: Image[] = [
    {
      id: 1,
      imgSource: 'https://bizweb.dktcdn.net/100/378/894/articles/hinh-nen-hoang-hon-dep-full-hd-9.jpg?v=1617714241727'
    },
    {
      id: 2,
      imgSource: 'https://lbm.vn/wp-content/uploads/2013/05/anh-sang-ben-01.jpg'
    },
    {
      id: 3,
      imgSource: 'https://mai.wedding/wp-content/uploads/2021/01/Untitled-5.jpg'
    }
  ];

  constructor() {
  }

  getImgs() {
    return this.images;
  }
}
