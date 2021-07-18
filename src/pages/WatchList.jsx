// components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import WatchListDetails from '../components/WatchListDetails';

// assets
import bannerImage from '../assets/images/home-bannger.jpg';

const WatchList = () => (
  <Layout>
    <>
      <Banner
        height="320px"
        bannerImageSRC={bannerImage}
        title="Watch List"
      />
      <div className="container">
        <div className="mt-6">
          <WatchListDetails />
        </div>
      </div>
    </>
  </Layout>
);

export default WatchList;
