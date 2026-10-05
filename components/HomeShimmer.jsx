import { useTheme } from '../contexts/Theme.js';
import Dropdown from './Dropdown';
import Search from './search';
import ShimmerCard from './shimmerCard.jsx';

import style from './skeleton.css';

const HomeShimmer = () => {
  const { theme } = useTheme();
  const shimmerArr = [];
  for (let i = 0; i < 8; i++) shimmerArr.push(<ShimmerCard key={i} />);
  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="search-filter">
        <Search />
        <div className="wrapper">
          <Dropdown />
        </div>
      </div>
      <div className="shimmer">{shimmerArr}</div>
    </main>
  );
};
export default HomeShimmer;
