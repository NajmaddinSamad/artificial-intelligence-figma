import './components/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import NextGeneration from './components/NextGeneration';
import Partners from './components/Partners';
import DataScience from './components/DataScience';
import AwardsContainer from './components/AwardsContainer';
import AwesomeSolutions from './components/AwesomeSolutions';

function App() {
  return (
    <>
   <Navbar/>
   <NextGeneration/>
   <Partners/>
   <DataScience/>
   <AwardsContainer/>
   <AwesomeSolutions/>
    </>
  )
}

export default App;
