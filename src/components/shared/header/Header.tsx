import './header.scss';

export const Header = () => {
   return (
      <header>
         <h2 className="header__logo">
            BookStore
         </h2>
         <input type="text" className="header__input" />
         <div className="header__btns">
            <button>postponed</button>
            <button>cart</button>
            <button>authorization</button>
         </div>
      </header>
   )
}