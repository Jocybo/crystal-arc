import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Language from './Language';
import Navone from './header/Navone';
import Castudio from './section/Castudio';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from './imageslider/slider';
import About from './section/About';
import CenterMode from './bestsell/Bestsellers';
import Nakawa from './section/Nakawa'

function App() {
  return (
    <div className='container-fluid'>
      <Language />
      <Navone /> 
      <LazyLoad />
      <About/>
      <Castudio />
      <CenterMode />
      <Nakawa />
    </div>
  );
}

export default App;
