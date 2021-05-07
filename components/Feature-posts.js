import React from 'react';

const FeaturePosts = ({ blok }) => {

  const posts = blok.posts;

  const displayDate = (date) => {
    const _date = new Date(date);

    return _date.toLocaleDateString() + ' ' + _date.toLocaleTimeString();
  };

  return (

    <div className="card__post" >
      <div className="card__post__body card__post__transition">
        <a href="#">
          <img src={posts[0].content.image.filename} className="img-fluid" alt="" />
        </a>
        <div className="card__post__content bg__post-cover">
          <div className="card__post__category">{posts[0].content.title}</div>
          <div className="card__post__title">
            <h5>
              <a href="#">{posts[0].content.text}</a>
            </h5>
          </div>
          <div className="card__post__author-info">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="./card-article-detail-v1.html">{posts[0].content.author}</a>
              </li>
              <li className="list-inline-item">
                <span>{displayDate(posts[0].content.date)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  );
}

export default FeaturePosts