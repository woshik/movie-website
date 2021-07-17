import { useState } from 'react';
import PropTypes from 'prop-types';

// components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import GenreList from '../components/GenreList';

// assets
import bannerImage from '../assets/images/home-bannger.jpg';

const Genre = ({ match }) => {
  const genreId = parseInt(match.params.id, 10);
  const [genreData, setGenreData] = useState({});

  return (
    <Layout>
      <>
        <Banner
          height="380px"
          bannerImageSRC={bannerImage}
          title={`${genreData.name} Genre`}
        />
        <div className="container">
          <div className="mt-6">
            <GenreList
              onlyShowId={genreId}
              movieCountPerGenre={10}
              viewMore={false}
              handlerGenreData={setGenreData}
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

Genre.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Genre;
