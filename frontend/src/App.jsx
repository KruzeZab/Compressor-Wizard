import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { RouterProvider } from 'react-router-dom';

import router from './routes';

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg-gray-100">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
};

export default App;
