import {Category} from '../../category/models/category';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  category?: Category;
}
