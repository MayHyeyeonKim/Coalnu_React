import React, {useEffect, useState} from "react";
import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    let {id} = useParams()
    const [product, setProduct] = useState(null);
    const getProductDetail = async() =>{
        const url = `https://my-json-server.typicode.com/mayhyeyeonkim/react-coalnu/products/${id}`;
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        setProduct(data)
    }
    useEffect(()=>{
        getProductDetail()
    },[])
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                    <div className="choice">{product.choice ? "Conscious choice" : ""}</div>
                    <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Select Size
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product.size && product.size.length > 0 ? (
                  product.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item disabled>No sizes available</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
                    <Button variant="dark" className="add-button">
                        Add to cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};
export default ProductDetail