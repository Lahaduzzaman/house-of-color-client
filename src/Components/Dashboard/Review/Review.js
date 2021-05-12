import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [{ photoURL }] = useContext(UserContext);
    const onSubmit = (data, e) => {
        const eventValue = {
            name: data.name,
            post: data.designation,
            photo: photoURL,
            review: data.description,
            rating: data.rating
        }

        fetch('https://morning-escarpment-96840.herokuapp.com/addReview', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventValue)
        })
            .then(res => {
                console.log("Success");
                alert("Uploaded Successfully")
            })
        e.target.reset()
    };
    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <div className="col-md-6 mt-5 pt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <input className="form-control mb-4 border-0 bg-light" placeholder="Your Name" {...register("name")} />
                                </div>
                                <div className="col-md-12">
                                    <input className="form-control mb-4 border-0 bg-light" placeholder="Company's name, Designation" {...register("designation")} />
                                </div>
                                <div className="col-md-12">
                                    <input type="number" min="0" max="5" className="form-control mb-4 border-0 bg-light" placeholder="Rating out of 5" {...register("rating")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <textarea rows="5" style={{ resize: 'none' }} className="form-control mb-4 border-0 bg-light" placeholder="Description" {...register("description")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <input className="btn btn-danger" type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;