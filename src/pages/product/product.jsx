import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
  const { id } = useParams()
  const [product , setProduct] = useState({});

  useEffect(() => {
    axios.get(`/product/${id}`)
    .then((res) => {
      setProduct(res.data);
    })
} , [id]);

  return (
    <div>
      <Header />
      <div className='product'>
       <p>{product.title}</p>
       <p>{product.description}</p>
       <img src={product.image} alt={product.title} />
      </div>
      <Footer />
    </div>
  )
}

export default Product;
