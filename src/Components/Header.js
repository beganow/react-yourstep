import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBeen } from "../hooks/useBeen";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/userSlice";

function Header(props) {
  const [isBool, setIsBool] = React.useState(false);
  const { totalPrice } = useBeen();
  const { email } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.svg" />
          <div className="headerInfo">
            <h3>YourStep</h3>
            <p>Сделай свой шаг комфортнее</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="headerli">
          <svg
            width={18}
            height={18}
            viewBox="0 0 512 512"
            alt="Корзина"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <g data-name="1" id="_1">
              <path d="M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z" />
              <path d="M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z" />
              <path d="M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z" />
              <path d="M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z" />
            </g>
          </svg>
          <span>1000 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={20}
              height={20}
              className="headerli"
              src="/img/heart-unliked.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          {email ? (
            <Link to="/orders">Заказы</Link>
          ) : (
            <Link to="/register">
              <img
                width={20}
                height={20}
                className="headerli"
                src="/img/user.svg"
                alt="Пользователь"
              />
            </Link>
          )}
        </li>
        <li>
          {email && (
            <button
              className="exit"
              onClick={() => {
                dispatch(removeUser());
                navigate("/");
              }}
            >
              Выйти
            </button>
          )}
        </li>
      </ul>
      <div
        className={isBool ? "hamburger-lines active" : "hamburger-lines"}
        onClick={() => setIsBool(!isBool)}
      >
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </header>
  );
}
export default Header;
