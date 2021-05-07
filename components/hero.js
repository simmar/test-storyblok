
const displayDate = (date) => {
    const _date = new Date(date);

    return _date.toLocaleDateString() + ' ' + _date.toLocaleTimeString();
};
const Hero = ({ blok }) => {
    console.log('blok', blok);
    return (
        <div className="card__post" >
            <div className="card__post__body card__post__transition">
                <a href="#">
                    <img src={blok.image.filename} className="img-fluid" alt="" />
                </a>
                <div className="card__post__content bg__post-cover">
                    <div className="card__post__category">{blok.title}</div>
                    <div className="card__post__title">
                        <h5>
                            <a href="#">{blok.text}</a>
                        </h5>
                    </div>
                    <div className="card__post__author-info">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="./card-article-detail-v1.html">{blok.author}</a>
                            </li>
                            <li className="list-inline-item">
                                <span>{displayDate(blok.date)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero