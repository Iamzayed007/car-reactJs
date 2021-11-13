import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'

const Car = (props) => {
    const { name, img, price, description } = props.car

    const des = description.slice(0, 250)

    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate)
        // Some logic
    }
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
                        <Card.Text>
                            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Car;