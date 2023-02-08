import React from "react";


function Footer(){
   return (
      <div className='footerf'>
         <div className="wrapperf">
            <div className="logof">
                  YourStep - официальный интернет-магазин в Беларуси предлагает купить красивую и качественную обувь: кроссовки, кеды, сандалии, босоножки, туфли, ботинки. 
                  <br/><br/><br/>Для уточнения модели, размера, цвета в наличии звоните на наш мобильный номер телефона.
            </div>
            <div className="adress_contactf">
               <div className="adressf">
                  <h3>Адрес : Республика Беларусь, Минск, Свердлова 24</h3>
               </div>
               <div className="contactf">
                  <h3>Contact:+375 (44) 123-45-67</h3>
                  <h3>Social:<p><a href='https://www.instagram.com/'><img width={20} height={20} src='/img/instagram.png' /></a>Instagram</p><p>
                     <a href="https://vk.com"><img width={20} height={20} src='/img/vk.png'/></a>VK</p><p>
                     <a href="https://web.telegram.org/"><img width={20} height={20} src='/img/telegram.png'/></a>Telegram</p></h3>
               </div>
            </div>

         </div>
      </div >
   )
}
export default Footer;