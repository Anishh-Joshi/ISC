import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Landing from './pages/landing'
import BucketPackingPage from './pages/make-bucket'
import ProductBannerOccasion from './pages/occasion-page'

function App() {
  return (
    <div className='font-main no-scrollbar'>
      <Navbar />
      <Landing />
      <ProductBannerOccasion/>
      <BucketPackingPage/>
      <Footer/>
    </div>
  )
}

export default App
