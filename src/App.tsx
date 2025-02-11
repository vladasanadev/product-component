
import './App.css'
import Product from './Product'

interface Product {
    id: number;
    name: string;
    price?: number;
    inStock: boolean;
}

function App() {
    const products = [
   { id: 1, name: "Wireless Headphones", price: 99.99, inStock: true },
  { id: 2, name: "Smartwatch", inStock: false }, // No price given
    { id: 3, name: "Gaming Mouse", price: 49.99, inStock: true },
  ];
 

  return (
    <>
    {
      products.map((item, key) =>(
        <Product key={key} product={item} />

      ))
      

    }
 
    
    </>
  )
}

export default App
