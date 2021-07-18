// components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import GenreList from '../components/GenreList';
import ViewedList from '../components/ViewedList';

// assets
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
        <GenreList />
        <div className="mt-5">
          <ViewedList movieCount={5} clearData={false} />
        </div>
      </div>
    </>
  </Layout>
);

export default Home;
