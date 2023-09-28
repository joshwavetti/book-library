import "./Home.style.css";
import { useEffect, useState } from "react";
import { IBook, PageEnum } from "./Book.type";
import BookList from "./BookList";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

const Home = () => {
  const [bookList, setBookList] = useState([] as IBook[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IBook);

  useEffect(() => {
    const listInString = window.localStorage.getItem("BookList");
    if (listInString) {
      _setBookList(JSON.parse(listInString));
    }
  }, []);

  const onAddBookClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setBookList = (list: IBook[]) => {
    setBookList(list);
    window.localStorage.setItem("BookList", JSON.stringify(list));
  };
  const addBook = (data: IBook) => {
    _setBookList([...bookList, data]);
  };
  const deleteBook = (data: IBook) => {
    const indexToDelete = bookList.indexOf(data);
    const tempList = [...bookList];

    tempList.splice(indexToDelete, 1);
    _setBookList(tempList);
  };

  const editBookData = (data: IBook) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IBook) => {
    const filteredData = bookList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = bookList.indexOf(filteredData);
    const tempData = [...bookList];
    tempData[indexOfRecord] = data;
    _setBookList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1> Book Catalogue</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Book"
              onClick={onAddBookClickHnd}
              className="add-book-btn"
            />
            <BookList
              list={bookList}
              onDeleteClickHnd={deleteBook}
              onEdit={editBookData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddBook
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addBook}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditBook
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
