import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components/reset.css'
import Navbar from './components/Navbar';
import NextGeneration from './components/NextGeneration';
import Partners from './components/Partners';
import DataScience from './components/DataScience';

function App() {
  return (
    <>
   <Navbar/>
   <NextGeneration/>
   <Partners/>
   <DataScience/>
    </>
  )
}

export default App;
