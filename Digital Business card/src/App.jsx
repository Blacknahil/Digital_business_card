
import HeaderPhoto from './components/HeaderPhoto'
import './App.css'
import Buttons from './components/Buttons'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="body">
    <HeaderPhoto />
    <div className="main--body">
    <Buttons/>
    <About />
    <Interest />
    </div>
    <Footer />

    </div>

    </>
  )
}

export default App
