import React from 'react';
import Hero from './hero';
const FeaturePosts = ({ blok }) => {
  return (
    <section>
      {/* Popular news  header*/}
      <div className="popular__news-header">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8 ">
              {/* <SliderHero slider={fields.slider} /> */}
            </div>
            <div className="col-md-4">
              <div className="popular__news-right">
                {blok.posts.map((post, index) => (
                  <Hero blok={post.content} key={index} />
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePosts