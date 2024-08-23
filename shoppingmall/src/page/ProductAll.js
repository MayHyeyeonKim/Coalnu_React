import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async()=>{
        // const url = `https://my-json-server.typicode.com/mayhyeyeonkim/react-coalnu/shoppingmall/products`;
        const url = 'https://my-json-server.typicode.com/mayhyeyeonkim/react-coalnu/products';
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
                {productList.map((menu,index)=>(<Col key={index} lg={3}><ProductCard item={menu}/></Col>))}
            </Row>
        </Container>
        </div>;
};

export default ProductAll