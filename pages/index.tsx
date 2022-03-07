import type { NextPage } from 'next';
import NavBar from '../components/NavBar';
import NavCard from '../components/NavCard';

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-primary-blue">
        <NavBar />
        <div className="grid h-[calc(100vh_-_89px)] place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 cards">
          <NavCard title="Create Orders" image="/list.svg" buttonText="create" />
          <NavCard title="View Orders" image="/orders.svg" buttonText="view" />
        </div>
      </div>
    </div>
  );
};

export default Home;
