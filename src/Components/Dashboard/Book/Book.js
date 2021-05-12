import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';


const Book = () => {
    const stripePromise = loadStripe('pk_test_51IgmxKGYUTY8stRJWvUVGBwXaBeXAgfhaRMwBvdY98QSZyhULM4NsTUmNexGUexE6oN49XgK4jzihrf6lyWsWcIg00JDql9uVz');

    const [{ name, email }] = useContext(UserContext);
    const { id } = useParams()

    //order information
    const [orderInfo, setOrderInfo] = useState({
        fullname: name,
        email: email,
        service: '',
        price: '',
        status: 'pending',
        color: 'danger',
        description: '',
        image: ''
    })

    //finding order info
    useEffect(() => {
        fetch(`https://morning-escarpment-96840.herokuapp.com/singleService/${id}`)
            .then(res => res.json())
            .then(data => {
                const newOrderInfo = { ...orderInfo }
                newOrderInfo.price = data[0].servicePrice;
                newOrderInfo.service = data[0].serviceName;
                newOrderInfo.description = data[0].serviceDesc;
                newOrderInfo.image = data[0].serviceImg
                setOrderInfo(newOrderInfo)
            })
    }, [id])

    //checking if payment clear and placing order
    const markAsPaid = (paymentInfo) => {
        if (paymentInfo !== null) {
            fetch('https://morning-escarpment-96840.herokuapp.com/addOrder', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderInfo)
            })
                .then(res => {
                    console.log("Success");
                    alert("Ordered Successfully")
                })
        }
    }

    const handleBlur = (event) => {
        const newOrderInfo = { ...orderInfo }
        newOrderInfo[event.target.name] = event.target.value;
        setOrderInfo(newOrderInfo);
    }


    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 mt-5">
                    <div className="col-md-6">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <input onBlur={(e) => { handleBlur(e) }} className="form-control mb-4 border-0 bg-light" defaultValue={name} name="fullname" />
                                </div>
                                <div className="col-md-12">
                                    <input onBlur={(e) => { handleBlur(e) }} className="form-control mb-4 border-0 bg-light" value={email} name="email" />
                                </div>
                                <div className="col-md-12">
                                    <input onBlur={(e) => { handleBlur(e) }} className="form-control mb-4 border-0 bg-light" defaultValue={orderInfo.service} name="service" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <h6>Your service charge will be ${orderInfo.price}</h6>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-md-12">
                                <Elements stripe={stripePromise}>
                                    <ProcessPayment markAsPaid={markAsPaid} />
                                </Elements>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Book;