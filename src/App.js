import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Middle/Carousel';
import CardSection from './components/Middle/CardSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
     <Header />
     <Carousel/>
     <CardSection/>
     <Footer/>
    </div>
  );
}

export default App;
