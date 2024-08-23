import React, { useEffect, useState } from "react";
import { Response } from '../../node_modules/whatwg-fetch/fetch';
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async()=>{
        // let url = `http://localhost:4000/products`
        let url = `https://my-json-server.typicode.com/mayhyeyeonkim/react-coalnu/shoppingmall/products?q=${searchQuery}`

        let response = await fetch(url)
        let data = await response.json();
        setProductList(data);
    }
    useEffect(()=>{
        getProducts();
    },[])
    return <div>
        <Container>
            <Row>
                {productList.map((menu)=>(<Col lg={3}><ProductCard item={menu}/></Col>))}
            </Row>
        </Container>
        </div>;
};

export default ProductAll