import './App.css';
import { Navigation } from './components/Navigation/Navigation'
import { Section } from './components/Section/Section'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navigation/>    
      <div className="container">
        <Section/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
