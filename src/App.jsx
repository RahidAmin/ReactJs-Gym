
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav>

      <h1 className='text-7xl bg-rose-50'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
      <Phones></Phones>





    </>
  )
}

export default App
