import { IBook } from "./Book.type";
import "./BookForm.style.css";
import { useState } from "react";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IBook) => void;
};
const AddBook = (props: Props) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onTitleChangeHnd = (e: any) => {
    setTitle(e.target.value);
  };
  const onGenreChangeHnd = (e: any) => {
    setGenre(e.target.value);
  };
  const onStatusChangeHnd = (e: any) => {
    setStatus(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IBook = {
      id: new Date().toJSON.toString(),
      title: title,
      genre: genre,
      status: status,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Book</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd} />
      <div>
        <form>
          <div>
            <label>Title </label>
            <input type="text" value={title} onChange={onTitleChangeHnd} />
          </div>
          <div>
            <label>Genre </label>
            <input type="text" value={genre} onChange={onGenreChangeHnd} />
          </div>
          <div>
            <label>Status </label>
            <input type="text" value={status} onChange={onStatusChangeHnd} />
          </div>
          <div>
            <input type="button" value="Back" onClick={onBackBtnClickHnd} />
            <input
              type="submit"
              value="Add Book"
              onClick={onSubmitBtnClickHnd}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
