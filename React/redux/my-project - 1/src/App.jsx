import './App.css'
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Page from './Pages/Page'
import Shoppage from './Pages/Shoppage'
import Login from './Pages/Login'
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Navbar from './Componetes/Navbar'
import Footer from './Componetes/Footer'



function App() {

  /* react router dom */

  return (
    <>


    <BrowserRouter>
       <Navbar/>
         <Routes>
           <Route path='/' element={<HomePage/>}></Route>
           <Route path='/Shoppage' element={<Shoppage/>}></Route>
           <Route path='/Page' element={<Page/>}></Route>
           <Route path='/Contact' element={<Contact/>}></Route>
           <Route path='/Blog' element={<Blog/>}></Route>
           <Route path='/Login'element={<Login/>}></Route>
          </Routes>
        {<Footer/> }
     </BrowserRouter>
     
   </>
  )
}

export default App
