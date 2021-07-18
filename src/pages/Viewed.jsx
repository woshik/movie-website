// components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import ViewedList from '../components/ViewedList';

// assets
import bannerImage from '../assets/images/home-bannger.jpg';

const Viewed = () => (
  <Layout>
    <>
      <Banner
        height="320px"
        bannerImageSRC={bannerImage}
        title="Recently Viewed"
      />
      <div className="container">
        <div className="mt-6">
          <ViewedList clearData />
        </div>
      </div>
    </>
  </Layout>
);

export default Viewed;
