import axios from "axios";
import React from "react";
import Card from "../Components/Card";
import AppContext from "../context"; 
function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://6383d6234ce192ac604bbc34.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка просмотра заказов");
      }
    })();
  }, []);
  return (
    <div className="content">
      <div className="content1">
        <h1>Мои заказы</h1>
      </div>

      <div className="Shoes">
        
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}

      </div>
    </div>
  )}
export default Orders;
