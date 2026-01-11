
import Navbar from './components/layout/Navbar.jsx'

function App(){


  return(
   <div className="flex flex-col  bg-(--surface-bg) transition-colors duration-300">
       <main className="flex-1 relative">
        <div className="overflow-x-hidden p-7.5">
         <Navbar/>
        </div>
       </main>
    </div>
  )
}


export default App;