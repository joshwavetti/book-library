// src/components/BookList.tsx
import React from 'react';

interface Book {
    serialNumber: number;
  title: string;
  genre: string;
  status: string;
  review: string;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
      <div>
        <h2>Book List</h2>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Status</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.serialNumber}</td>
                <td>{book.title}</td>
                <td>{book.genre}</td>
                <td>{book.status}</td>
                <td>{book.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default BookList;