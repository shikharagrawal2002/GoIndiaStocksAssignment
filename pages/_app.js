import Companies from '../components/Companies'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Stocks from '../components/Stocks'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <div className='bg-grey w-full h-screen overflow-hidden'>
    <div>
      <Navbar/>
    </div>
    <div>
      <Stocks/>
      <Companies/>
    </div>
    <div>
      <Content/>
    </div>
    <Footer/>
    <div className="fixed bottom-0 right-0 mr-[5%] text-white mb-[3%]">
          <div className="text-7xl bg-blue rounded-full h-16 w-16 justify-center items-center flex">+</div>
    </div>
  </div>
  <Component {...pageProps}/>
  </>
  )
}

export default MyApp
