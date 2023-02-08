import React from 'react';
import AppContext from '../context';

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartempty">
      <img className="cartemptyimg" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="cartemptyp">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img width={15} height={15} src="/img/arrow1.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;