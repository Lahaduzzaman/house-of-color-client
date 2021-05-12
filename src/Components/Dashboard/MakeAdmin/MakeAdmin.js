import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const [adminMail, setAdminMail] = useState('')

    const handleSubmit = () => {

        const eventValue = { email: adminMail }

        fetch('https://morning-escarpment-96840.herokuapp.com/addAdmin', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventValue)
        })
            .then(res => {

                alert("Admin added successfully")
            })

    }

    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <div className="row container">
                        <div className="col-md-6 mt-5">
                            <div className="row">
                                <div className="col-md-8">
                                    <input onBlur={(e) => { setAdminMail(e.target.value) }} className="form-control" placeholder="something@mail.com" type="email" />
                                </div>
                                <div className="col-md-4">
                                    <button onClick={() => { handleSubmit() }} className="btn btn-danger">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;