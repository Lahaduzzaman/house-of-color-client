import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const ManageServiceCard = ({ serviceInfo }) => {
    const { serviceName, serviceImg, _id } = serviceInfo;

    const handleDelete = id => {
        fetch(`https://morning-escarpment-96840.herokuapp.com/deleteService/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card border="light" className="shadow flex-row p-3 align-items-center mt-5" style={{ width: '18rem' }}>
                <div> <img style={{ width: '40px' }} src={serviceImg} alt="" /> </div>
                <div> <h5 className="text-center text-danger ml-3 " > {serviceName} </h5>  </div>
                <div><FontAwesomeIcon style={{ cursor: "pointer" }} onClick={() => handleDelete(`${_id}`)} className="ml-3" color="red" title="Remove" icon={faTrash} /></div>
            </Card>
        </div>
    );
};

export default ManageServiceCard;