import './App.scss';
import Bill from './components/Bill/Bill';
import Buttons from './components/Buttons/Buttons';
import NrOfPeople from './components/NrOfPeople/NrOfPeople';
import ResetBtn from './components/ResetBtn/ResetBtn';
import Total from './components/Total/Total';
import Footer from './components/Footer/Footer';
import logo from './images/logo.svg';

const App = () => {
  return (
    <main>
      <img src={logo} alt='splitter' />
      <div className='container'>
        <div className='container__calculator'>
          <Bill />
          <Buttons />
          <NrOfPeople />
        </div>
        <div className='container__total'>
          <Total />
          <ResetBtn />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
