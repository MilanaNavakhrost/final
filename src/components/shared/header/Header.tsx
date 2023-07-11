import './header.scss';

export const Header = () => {
   return (
      <header>
         <div className="header__logo">
            BookStore
         </div>
         <input type="text" className="header__input" />
         <div className="header__btns">
            <button>postponed</button>
            <button>cart</button>
            <button>authorization</button>
         </div>
      </header>
   )
}