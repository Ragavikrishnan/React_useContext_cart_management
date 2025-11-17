import data from '../assets/product.json'
import "./Style.css"
import Product from './Product'

const Home = () => {

  console.log(data)
  return (
    <>
      <div className='Home-container'>
        {data.map((item) => (
          <Product key={item.id} product={item} />

        ))}
      </div>
    </>
  )
}

export default Home