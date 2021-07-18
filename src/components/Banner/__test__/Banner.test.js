import { render } from '@testing-library/react';
import Banner from '../Banner';

const title = 'Welcome Cefalo';
const subTitle = 'Explore Millions of movies, Watch Anywhere.';
const height = '320px';
const imageSrc = 'banner-image.jpg';

describe('Testing Banner Component', () => {
  test('Text render with correct text', () => {
    const { getByTestId } = render(
      <Banner
        title={title}
        subTitle={subTitle}
        height={height}
        bannerImageSRC={imageSrc}
      />,
    );

    expect(getByTestId('title').textContent).toBe(title);
    expect(getByTestId('subTitle').textContent).toBe(subTitle);
  });

  test('Banner height and image src', () => {
    const { getByTestId } = render(
      <Banner height={height} bannerImageSRC={imageSrc} />,
    );

    expect(getByTestId('banner-image').style.height).toBe(height);
    expect(getByTestId('banner-image').style.backgroundImage).toBe(`url(${imageSrc})`);
  });
});
