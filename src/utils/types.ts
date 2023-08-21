export interface IBook {
  title: string;
  subtitle: string;
  isbn13: number;
  price: string;
  image: string;
  url: string;
  authors: string;
  publisher: string;
  isbn10: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  language: string;
  cartAmount: number;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
}