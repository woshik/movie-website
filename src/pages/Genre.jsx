import { useState } from 'react';
import PropTypes from 'prop-types';

// components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import GenreList from '../components/GenreList';
import SortMovie from '../components/SortMovie';

// static data
import { movieSortingList } from '../redux/static';

// assets
import bannerImage from '../assets/images/home-bannger.jpg';

const Genre = ({ match }) => {
  const genreId = parseInt(match.params.id, 10);
  const [genreData, setGenreData] = useState({});
  const [selectedValue, setSelectedValue] = useState(movieSortingList[0].value);

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
            <SortMovie
              sortList={movieSortingList}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
            <GenreList
              onlyShowId={genreId}
              movieCountPerGenre={10}
              viewMore={false}
              handlerGenreData={setGenreData}
              queryParams={{
                page: 1,
                sort_by: selectedValue,
              }}
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
