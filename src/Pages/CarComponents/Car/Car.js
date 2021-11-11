import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Car = (props) => {
    const { name, img, price } = props.car
    return (
        <div>
            <Col>


                <Card>
                    <Card.Img variant="top" src={img} height="500" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Car;