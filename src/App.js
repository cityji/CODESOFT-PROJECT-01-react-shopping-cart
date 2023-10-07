
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav/Nav';
// import Carousel from './Components/Landing/Carousel'
import Faq from './Components/Faq/Faaq';
import Welcome from './Components/Welcome/Welcome';
import CommingSoon from './Components/CommingSooon/CommingSooon';
function App() {
  return (
    <div className="App">
        <Nav/>
        <Welcome/>
        <CommingSoon/>
       {/* <Carousel/>  */}
        <Faq/>
      {/* <header className="App-header">
        
      </header> */}
    </div>
  );
}

export default App;
