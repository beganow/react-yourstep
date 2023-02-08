import React from 'react';
import Card from '../Components/Card';
import AppContext from '../context';

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
    return(
    <div className="content" >
    <div className="content1">
      <h1>Мои закладки</h1>
    </div>
    {favorites.length < 1 ? (<div className='df'><center><img className="smile" src='./img/smile.png'/><h2>В закладках пусто. <br></br>Выберите товар и нажмите на сердце</h2></center></div>) : <div className="Shoes">
        {favorites.map((item, index) => (
          <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
        ))}
    </div>}
    
    
    </div>
  );
}
export default Favorites;