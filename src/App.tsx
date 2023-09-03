// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';

interface Book {
  serialNumber: number;
  title: string;
  genre: string;
  status: string;
  review: string;
}

function App() {
  const [isAddingBook, setIsAddingBook] = useState<boolean>(false);

  const [newBook, setNewBook] = useState<Book>({
    serialNumber: 4, // Start from 4
    title: '',
    genre: '',
    status: '',
    review: '',
  });

  const [books, setBooks] = useState<Book[]>([
    {
      serialNumber: 1,
      title: 'The Great Gatsby',
      genre: 'Fiction',
      status: 'Available',
      review: 'A classic novel with a compelling story.',
    },
    {
      serialNumber: 2,
      title: 'Murder on the Orient Express',
      genre: 'Mystery',
      status: 'Checked Out',
      review: 'A thrilling mystery that keeps you guessing until the end.',
    },
    {
      serialNumber: 3,
      title: 'Sapiens: A Brief History of Humankind',
      genre: 'Non-fiction',
      status: 'Available',
      review: 'An eye-opening exploration of human history.',
    },
  ]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const toggleAddBook = () => {
    setIsAddingBook(!isAddingBook);
  };

  const addNewBook = () => {
    if (newBook.title && newBook.genre && newBook.status && newBook.review) {
      setBooks((prevBooks) => [
        ...prevBooks,
        {
          ...newBook,
          serialNumber: newBook.serialNumber,
        },
      ]);
      setNewBook((prevBook) => ({
        ...prevBook,
        serialNumber: prevBook.serialNumber + 1,
      }));
      setNewBook((prevBook) => ({
        ...prevBook,
        title: '',
        genre: '',
        status: '',
        review: '',
      }));
      setIsAddingBook(false);
    }
  };

  return (
    <div className="App">
      <h2>Book List</h2> {/* Display the heading outside of the return statement */}
      <BookList books={books} />
      {isAddingBook && (
        <div className="book-form">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Genre:
            <input
              type="text"
              name="genre"
              value={newBook.genre}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={newBook.status}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Review:
            <textarea
              name="review"
              value={newBook.review}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={addNewBook}>Add Book</button>
        </div>
      )}
      <button
        className={`add-book-button ${isAddingBook ? 'hidden' : ''}`}
        onClick={toggleAddBook}
      >
        Add Book
      </button>
    </div>
  );
}

export default App;
