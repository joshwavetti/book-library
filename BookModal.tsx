import { IBook } from "./Book.type";
import "./BookModal.style.css";

type Props = {
  onClose: () => void;
  data: IBook;
};

const BookModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Book Data</h3>
        <div>
          <div>
            <label> Title : {data.title}</label>
          </div>
          <div>
            <label> Genre : {data.genre}</label>
          </div>
          <div>
            <label> Status : {data.status}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;

/* import { IBook } from "./Book.type";
import "./BookModal.style.css";

type Props ={
   onClose: () => void;
   data: IBook
};

const BookModal = (props: Props) => {
   const {onClose, data} = props
   return  (
   <div id="myModal" className="modal">
         <div className="modal-content">
             <span className="close" onClick={onClose}>&times;</span>
             
               <h3> Book Data</h3>
               <div>
               <div>
                  <label> Title : {data.title}</label>
               </div>
               <div>
                  <label> Genre : {data.genre}</label>
               </div>
               <div>
                  <label> Status : {data.status}</label>
               </div>
             </div>
  </div>
</div>
   );
};
 
export default BookModal;   */
