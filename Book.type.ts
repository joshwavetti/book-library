export interface IBook {
  id: string;
  title: string;
  genre: string;
  status: string;
}

export const dummyBookList: IBook[] = [
  {
    id: new Date().toJSON().toString(),
    title: "Rich Dad Poor Dad",
    genre: "Finance",  
    status: "Available",
  },
];

export enum PageEnum{
list,
add,
edit
} 