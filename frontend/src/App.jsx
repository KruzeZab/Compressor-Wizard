import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <div className="pb-16">
        <Header />
      </div>
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
