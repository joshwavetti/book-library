import { IBook } from "./Book.type";
import "./BookForm.style.css";
import { useState } from "react";

type Props = {
    data: IBook;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IBook) => void
};

const EditBook = (props: Props) => {
    const {data, onBackBtnClickHnd, onUpdateClickHnd} = props;

    const [title, setTitle] = useState(data.title);
    const [genre, setGenre] = useState(data.genre);
    const [status, setStatus] = useState(data.status);

    const onTitleChangeHnd = (e: any) => {
        setTitle(e.target.value);
      };
      const onGenreChangeHnd = (e: any) => {
        setGenre(e.target.value);
      };
      const onStatusChangeHnd = (e: any) => {
        setStatus(e.target.value);
      };

      const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updatedData: IBook = {
          id: data.id,
          title: title,
          genre: genre,
          status: status,
        };
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
      };

    return  (
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
          <input type="submit" value="Update Book" />
        </div>
      </form>
    </div>
  </div>
    );
};




export default EditBook;