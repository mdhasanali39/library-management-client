import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
