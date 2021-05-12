import React from 'react';
import { Badge } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="mb-5 pb-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >Contact</Badge></h3> </div>
                    <div className="col-12 mb-5" >
                        <h1 className="text-center mt-3" >Let us handle your <br /> project, professionally.</h1>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="form-control mb-4 border-0 bg-light" placeholder="First Name" {...register("example")} />
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control mb-4 border-0 bg-light" placeholder="Last Name" {...register("example")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="form-control mb-4 border-0 bg-light" placeholder="Email Address" {...register("example")} />
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control mb-4 border-0 bg-light" placeholder="Phone Number" {...register("example")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <textarea rows="5" style={{ resize: 'none' }} className="form-control mb-4 border-0 bg-light" placeholder="Your Message" {...register("example")} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <input className="btn btn-danger" type="submit" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;