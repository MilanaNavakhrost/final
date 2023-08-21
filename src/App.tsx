import { BookPage } from "./components/pages/book_page/BookPage";
import { CartPage } from "./components/pages/cart_page/CartPage";
import { HomePage } from "./components/pages/home_page/HomePage";
import { Footer } from "./components/shared/footer/Footer";
import { Header } from "./components/shared/header/Header";
import { Routes, Route } from "react-router-dom";
import { LikedPage } from "./components/pages/liked_page/LikedPage";
import { LoginPage } from "./components/pages/login_page/LoginPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
