
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';



function Home({items,  searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite, isLoading }) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(28)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
 
    <div className="content" >
   
    <div className="content1">
      <h1 className="contitle">{searchValue ? `Поиск по запросу : "${searchValue}"` : 'Вся обувь'}</h1>
      <div className="search-block">
        <img width={25} higth={25} src="/img/search.svg" alt="Search" />
        {searchValue && (<img onClick={() => setSearchValue('')} width={20} higth={20} className="clear" src="/img/cross.svg" alt="Clear" />)}
        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
      </div>
    </div>


    <div className="renderitems">{renderItems()}</div>
  </div>)
}
export default Home;
