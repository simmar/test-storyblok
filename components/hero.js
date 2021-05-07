
// import { SliderHero } from './hero-slider';
import { FeaturePost } from './Feature-posts';
const Hero = ({ blok }) => {
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
                <FeaturePost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero