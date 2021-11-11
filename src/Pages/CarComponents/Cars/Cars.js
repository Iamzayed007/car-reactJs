import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Car from '../Car/Car';

const Cars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            <Header />
            {
                !cars.length &&
                <div className="text-center mt-5">
                    <Spinner animation="grow" />
                </div>
            }

            {cars.length &&
                <Row xs={1} md={2} className="g-4 my-5">
                    {cars.map((car, idx) => (
                        <Car

                            car={car}
                        />
                    ))}
                </Row>}

            <Footer />

        </div>
    );
};

export default Cars;