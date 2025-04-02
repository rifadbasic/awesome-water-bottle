import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles'

const bottlesPromise = fetch('./bottles.json').then(res => res.json());

function App() {

  return (
    <>
      
      <h1>Buy awesome water bottle</h1>

      <Suspense fallback={<h1>Loading bottles...</h1>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
