import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import './OrdersPage.css';
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({ cart,loadCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersDate = async () => {
            const response = await axios.get("/api/orders?expand=products")
            setOrders(response.data);
        };
        fetchOrdersDate();

    }, []);


    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/png" href="orders-favicon.png" />


            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} loadCart={loadCart} />
            </div>
        </>
    );
}