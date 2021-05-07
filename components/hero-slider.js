import React from 'react';
import Slider from 'react-slick';

export function SliderHero({ slider }) {
  const heroSlider = slider.fields.posts;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // const displayDate = (date) => {
  //   const _date = new Date(date);

  //   return _date.toLocaleDateString() + ' ' + _date.toLocaleTimeString();
  // };

  return (
    <div className="card__post-carousel">
      <Slider {...settings}>
        {heroSlider.map((item, index) => (
          // <div className="item" key={index}>
          //   <div className="card__post">
          //     <div className="card__post__body">
          //       <a href="./card-article-detail-v1.html">
          //         <img src={item.fields.media.fields.file.url} className="img-fluid" alt="" />
          //       </a>
          //       <div className="card__post__content bg__post-cover">
          //         <div className="card__post__category">{item.fields.category.fields.title}</div>
          //         <div className="card__post__title">
          //           <h2>
          //             <a>{item.fields.titre}</a>
          //           </h2>
          //         </div>
          //         <div className="card__post__author-info">
          //           <ul className="list-inline">
          //             <li className="list-inline-item">
          //               <a href="#">{item.fields.author}</a>
          //             </li>
          //             <li className="list-inline-item">
          //               <span>{displayDate(item.fields.date)}</span>
          //             </li>
          //           </ul>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          
        ))}
      </Slider>
    </div>
  );
}
