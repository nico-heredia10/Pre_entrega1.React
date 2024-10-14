
import Nav from './componentes/cabezas/Nav';
import Menu from './componentes/cabezas/Menu';
import Footer from './componentes/cabezas/Footer';
import Cards from './componentes/reutilizables/Cards';
import Carrito from './componentes/reutilizables/carrito';
import {Routes , Route} from 'react-router-dom';

const Layout = ({ children }) =>{

  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path='/productos' element={<Cards/>}/>
          <Route path='/Carrito' element={<Carrito />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
