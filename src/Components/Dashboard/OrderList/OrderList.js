import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch('https://morning-escarpment-96840.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [refresh])


    const handleChange = (e) => {
        const id = e.target.name;
        let color = ''
        if (e.target.value === "Done") {
            color = "success"
        }
        if (e.target.value === "On going") {
            color = "warning"
        }
        if (e.target.value === "Pending") {
            color = "danger"
        }
        const eventValue = {
            status: e.target.value,
            color: color
        }

        fetch(`https://morning-escarpment-96840.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventValue)
        })
            .then(res => res.json())
            .then(data => data)
        setRefresh(!refresh)

    }

    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <div className="row container mt-5 ">
                        <Table bordered variant="light" >
                            <thead>
                                <tr >
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Pay With</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(each => <tr style={{ height: '80px' }} ><td>{each.fullname}</td> <td> {each.email} </td><td>{each.service}</td><td>Credit Card</td><td>
                                        <select name={each._id} value={each.status} onChange={e => handleChange(e)} className={`form-control w-75 border-0 text-${each.color}`} >
                                            <option value="Pending">Pending</option>
                                            <option value="On going">On going</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </td> </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;