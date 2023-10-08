import ContentLoader from 'react-content-loader';
export const Loader = () => {
  return (
    <ContentLoader
      height={140}
      speed={1}
      backgroundColor={'#c788d2'}
      foregroundColor={'#f1daf5'}
      viewBox="0 0 380 70"
    >
      {}
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  );
};
