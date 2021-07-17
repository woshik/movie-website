import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Genre from '../components/Genre';
import bannerImage from '../assets/images/home-bannger.jpg';

const Home = () => (
  <Layout>
    <>
      <Banner
        height="520px"
        bannerImageSRC={bannerImage}
        title="Welcome"
        subTitle="Explore Millions of movies, Watch Anywhere."
      />
      <div className="container">
        <div className="mt-6">
          <Genre />
        </div>
        <div className="mt-6">
          <Genre />
        </div>
      </div>
    </>
  </Layout>
);

export default Home;
