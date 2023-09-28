import { IBook } from "./Book.type";
import "./BookList.style.css";
import BookModal from "./BookModal";
import { useState } from "react";

type Props = {
  list: IBook[];
  onDeleteClickHnd: (data: IBook) => void;
  onEdit: (data: IBook) => void;
};
const BookList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IBook | null);

  const viewBook = (data: IBook) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);
  return (
    <div>
      <article>
        <h3 className="list-header">Book List</h3>
      </article>
      <table>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {list.map((book) => {
          return (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.status}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    className="action_button"
                    onClick={() => viewBook(book)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    className="action_button"
                    onClick={() => onEdit(book)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="action_button"
                    onClick={() => onDeleteClickHnd(book)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <BookModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default BookList;
