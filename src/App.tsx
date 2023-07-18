import React from "react";
import './App.scss';
import { Header } from "./components/shared/header/Header";
import { BooksList } from "./components/pages/home_page/subcomponents/books_list/BooksList";

function App() {
  return (
    <div className="container">
      <Header />
      <BooksList />
    </div>
  );
}

export default App;
