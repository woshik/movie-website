// components
import Layout from '../components/Layout';
import Banner from '../components/Banner';

// assets
import bannerImage from '../assets/images/home-bannger.jpg';

const MovieDetail = () => (
  <Layout>
    <Banner
      height="520px"
      bannerImageSRC={bannerImage}
      title="Welcome"
      subTitle="Explore Millions of movies, Watch Anywhere."
    />
  </Layout>
);

export default MovieDetail;
