import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Login.css'
const Login = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
        console.log(data.email)
        console.log(data.password)

    };
    return (
        <div className=" text-center" >

            {/* <Container> */}
            <Row className="login-section">
                <Col xs={12} className="mx-auto text-center" >

                    <Card style={{ width: '18rem' }} >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input  {...register("email")} className="form-control" />

                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("password", { required: true })} className="form-control" />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="btn btn-outline-success" />
                        </form>
                    </Card>

                </Col>
            </Row>
            {/* </Container> */}

        </div>
    );
};

export default Login;