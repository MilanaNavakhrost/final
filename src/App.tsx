import { BookPage } from "./components/pages/book_page/BookPage";
import { CartPage } from "./components/pages/cart_page/CartPage";
import { HomePage } from "./components/pages/home_page";
import { Header } from "./components/shared/header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
