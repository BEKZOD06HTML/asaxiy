import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Products from '../../components/mag/mag'
import Carusel from '../../components/carusel/carusel';





const Home = () => {
  return (
    <div>
        <Header/>
        <Carusel/>
          <Products />
        <Footer/>

    </div>
  )
}

export default Home
