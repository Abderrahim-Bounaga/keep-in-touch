import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

class Contact extends Component {
    
    _handleFoormSubmit(values){
        console.log(values);
        axios.post('http://localhost:5050/Mail', values).then((response) => {
            console.log(response)
            this.props.history.push('/DashBord')
            }).catch((error) => { console.log(error) });
        
    };
     
    render() {
        return (
            <div style={{padding : 20}}>
                <h3>Sign in to your account</h3>
                <hr/>
                <Formik
                    initialValues={{firstName:'',lastName:'',phoneNumber:'',email:'',message:''}}
                    onSubmit={this._handleFoormSubmit.bind(this)}
                    validationSchema={yup.object().shape({
                        firstName:yup.string().required(),
                        lastName:yup.string().required(),
                        phoneNumber:yup.number().min(10).required(),
                        email:yup.string().email().required(),
                        message: yup.string().min(6).required()
                    })}
                    render={({
                        handleChange,
                        handleSubmit,
                        isValid,
                        isSubumitting,
                        handleBlur,
                        errors,
                        touched
                    })=>(
                        <div>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input name="firstName"
                                    invalid={errors.firstName && touched.firstName}
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                    />
                                    {errors.firstName && touched.firstName ? (
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                        ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input name="lastName"
                                invalid={errors.lastName && touched.lastName} 
                                type="text" 
                                placeholder="Last Name"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.lastName && touched.lastName ? (
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone Number</Label>
                                <Input name="phoneNumber"
                                invalid={errors.phoneNumber && touched.phoneNumber} 
                                type="number" 
                                placeholder="+212600000000"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <FormFeedback>{errors.phoneNumber}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input name="email"
                                invalid={errors.email && touched.email} 
                                type="email" 
                                placeholder="someone@abolkog.com"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                    <FormFeedback>{errors.email}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Message</Label>
                                <Input name="message"
                                invalid={errors.message && touched.message}
                                type="textarea" 
                                placeholder="Your message"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.message && touched.message ? (
                                    <FormFeedback>{errors.message}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <Button color='primary' block onClick={handleSubmit} disabled={!isValid || isSubumitting}>Submit!</Button>
                                        
                        </div>
                    )}
                    />

            </div>
        )
    }
}



export {Contact};