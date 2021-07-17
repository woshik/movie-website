import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenreList } from '../redux/genre';

// components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Genre from '../components/Genre';

// assets
import bannerImage from '../assets/images/home-bannger.jpg';

const Home = () => {
  // get genre list
  const genreList = useSelector(({ genre }) => genre.list);

  const dispatch = useDispatch();

  useEffect(() => {
    // if genre data already exist not need the API call every time
    if (genreList.length === 0) {
      dispatch(fetchGenreList());
    }
  }, []);

  return (
    <Layout>
      <>
        <Banner
          height="520px"
          bannerImageSRC={bannerImage}
          title="Welcome"
          subTitle="Explore Millions of movies, Watch Anywhere."
        />
        <div className="container">
          {genreList.map((genre) => (
            <div key={genre.id} className="mt-6">
              <Genre genre={genre} />
            </div>
          ))}
        </div>
      </>
    </Layout>
  );
};

export default Home;
