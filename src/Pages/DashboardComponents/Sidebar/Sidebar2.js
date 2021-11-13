import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Pay from '../../DashboardComponents/Pay/Pay'
import MyOrder from '../../DashboardComponents/MyOrder/MyOrder'
import Review from '../../DashboardComponents/Review/Review'

import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageCar from '../ManageCar/ManageCar';
import AddNewCar from '../AddNewCar/AddNewCar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const bgStyle = {
    backgroundColor: 'white'
}

const Sidebar2 = () => {
    const { user, admin } = useAuth()
    let { path, url } = useRouteMatch()

    return (
        <div className="mt-3">
            {/* icon={<FaGem />} */}
            {/* icon={<FaHeart />} */}
            {/* <Container> */}

            <Row>
                <Col xs={12} md={3}>
                    <ProSidebar >
                        <Menu style={{ height: "500px" }} iconShape="square" >
                            <MenuItem >Dashboard
                                <Link to={path}> </Link>
                            </MenuItem>

                            {!admin &&

                                <>
                                    <MenuItem >

                                        <Link to={`${url}/pay`}> Pay</Link>
                                    </MenuItem>
                                    <MenuItem >
                                        My Order
                                        <Link to={`${url}/myOrder`}> </Link>
                                    </MenuItem>
                                    <MenuItem >
                                        Review
                                        <Link to={`${url}/review`}> </Link>
                                    </MenuItem>
                                </>
                            }
                            {!admin &&

                                <>
                                    <MenuItem >

                                        <Link to={`${url}/manageAllOrder`}> Manage all Order</Link>
                                    </MenuItem>
                                    <MenuItem >
                                        Manage All Cars
                                        <Link to={`${url}/manageAllCars`}> </Link>
                                    </MenuItem>
                                    <MenuItem >
                                        Add New Car
                                        <Link to={`${url}/addNewCars`}> </Link>
                                    </MenuItem>
                                    <MenuItem >
                                        Make Admin
                                        <Link to={`${url}/makeAdmin`}> </Link>
                                    </MenuItem>
                                </>
                            }
                            <SubMenu title={user?.displayName} >
                                <MenuItem>Log out </MenuItem>

                            </SubMenu>







                        </Menu>




                    </ProSidebar>;

                </Col>

                <Col xs={12} md={9} className="text-start">
                    <Switch>
                        {/* <Route exact path={path}>
                            <Dashboard />
                        </Route> */}
                        <Route exact path={`${path}/pay`}>
                            <Pay />
                        </Route>
                        <Route exact path={`${path}/myOrder`}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route exact path={`${path}/manageAllCars`}>
                            <ManageCar></ManageCar>
                        </Route>
                        <Route exact path={`${path}/manageAllOrder`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route exact path={`${path}/addNewCars`}>
                            <AddNewCar></AddNewCar>
                        </Route>
                        <Route exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </Switch>

                </Col>
            </Row>
            {/* </Container> */}




        </div>
    );
};

export default Sidebar2;