import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <React.Fragment>
      <h1>Amazon Best Seller</h1>;
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </React.Fragment>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
