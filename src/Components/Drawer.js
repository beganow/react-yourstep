import React, { useEffect } from "react";
import axios from "axios";
import Info from "./info";
import { useBeen } from "../hooks/useBeen";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useSelector } from "react-redux";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const navigate = useNavigate();
  const { cartItems, setCartItems, totalPrice } = useBeen();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { email } = useSelector((state) => state.user);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6383d6234ce192ac604bbc34.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://6383d6234ce192ac604bbc34.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (email === null) {
      onClose();
      alert("Для оформления заказа необходимо авторизоваться");
      navigate("/login");
    }
  }, []);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="carth">
          Корзина
          <img
            onClick={onClose}
            width={20}
            higth={20}
            className="removebtn"
            src="/img/cross.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="overitems">
            {" "}
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img
                    className="cartimg"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  />
                  <div className="carttxt">
                    <p className="pcart">{obj.name}</p>
                    <b>ЦЕНА:{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    width={20}
                    higth={20}
                    className="removebtn"
                    src="/img/cross.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="fceller">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>{(totalPrice * 5) / 100} руб.</b>
                </li>
              </ul>
              <button
                className="greenButton"
                disabled={isLoading}
                onClick={onClickOrder}
              >
                Оформить заказ
                <img
                  weight={10}
                  height={10}
                  src="/img/arrow1.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isOrderComplete ? "/img/order.png" : "/img/empty.png"}
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
