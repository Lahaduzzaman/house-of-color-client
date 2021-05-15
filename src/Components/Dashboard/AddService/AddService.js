import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState('');
    const [btnEnable, setBtnEnable] = useState(false);
    const onSubmit = (data, e) => {
        const eventValue = {
            serviceName: data.title,
            servicePrice: data.price,
            serviceImg: imageUrl,
            serviceDesc: data.description
        }

        fetch('https://glacial-mountain-57695.herokuapp.com/addService', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventValue)
        })
            .then(res => {
                alert("Uploaded Successfully")
            })
        e.target.reset()
    };

    const handleImage = (e) => {
        const files = e.target.files[0];
        const imageData = new FormData();
        imageData.set('key', '0183294d077e783abe41ce516155a08b');
        imageData.append('image', files);

        fetch('https://api.imgbb.com/1/upload', {
            method: "POST",
            body: imageData
        })
            .then(res => res.json())
            .then(data => {
                setImageUrl(data.data.display_url);
                setBtnEnable(true)
            })
    }

    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <div className="row container mt-5 pt-5">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <input className="form-control border-0 bg-light" placeholder="Service Title" {...register("title", { required: true })} />
                                        {errors.title && <span className="text-danger" >* Title is required</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <input className="form-control  border-0 bg-light" placeholder="Service Price" {...register("price", { required: true })} />
                                        {errors.price && <span className="text-danger" >* Price is required</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <input onChange={handleImage} type="file" className="form-control mb-4 border-0 bg-light" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <textarea rows="5" style={{ resize: 'none' }} className="form-control  border-0 bg-light" placeholder="Description" {...register("description", { required: true })} />
                                        {errors.description && <span className="text-danger" >* Description is required</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <input className={btnEnable ? "btn btn-primary" : "btn btn-primary waiting disabled"} type="submit" value="Add Service" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AddService;