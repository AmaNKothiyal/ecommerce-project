import axios from 'axios';
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';
// import { products } from '../../starting-code/data/products';

 export function HomePage({ cart,loadCart }) {
    // fetch("http://localhost:3000/api/products")
    // .then((response)=>{
    //     // response.json().then((data)=>{
    //     //     console.log(data);
    //     // });
    //     return response.json();
    // }).then((data)=>{
    //     console.log(data);
    // });
    const [products,setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect(() => {
        const getHomeData = async ()=>{
            const urlPath = search ? `/api/products?search=${search}`:'/api/products';
            const response = await axios.get(urlPath);
            setProducts(response.data);
        };
        getHomeData();
    }, [search]);
    

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/png" href="home-favicon.png" />


            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}
