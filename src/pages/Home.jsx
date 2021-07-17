import Layout from '../components/Layout';
import Banner from '../components/Banner';
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
      <div className="container mt-5">
        Hello
      </div>
    </>
  </Layout>
);

export default Home;
