import React, { Component } from 'react'
import {useParams} from 'react-router-dom';
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
function SendMail(props) {
    
    let {Email} = useParams()
    function _handleFoormSubmit(values){
        console.log(values);
        axios.post(`http://localhost:5050/send/${Email}`, values).then((response) => {
            console.log(response)
            props.history.push('/DashBord')
            }).catch((error) => { console.log(error) });
        
    };
    
    
        return (
            <div style={{padding : 20}}>
                <h3>Sign in to your send mail</h3>
                <hr/>
                <Formik
                    initialValues={{subject:'',text:''}}
                    onSubmit={_handleFoormSubmit.bind(this)}
                    validationSchema={yup.object().shape({
                        subject:yup.string().required(),
                        text:yup.string().required(),                        
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
                                <Label>Subject</Label>
                                <Input name="subject"
                                    invalid={errors.subject && touched.subject}
                                    type="text"
                                    placeholder="Subject"
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                    />
                                    {errors.subject && touched.subject ? (
                                        <FormFeedback>{errors.subject}</FormFeedback>
                                        ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Text</Label>
                                <Input name="text"
                                invalid={errors.text && touched.text} 
                                type="textarea" 
                                placeholder="Text"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.text && touched.text ? (
                                    <FormFeedback>{errors.text}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <Button color='primary' block onClick={handleSubmit} disabled={!isValid || isSubumitting}>Submit!</Button>
                                        
                        </div>
                    )}
                    />

            </div>
        )
    
}



export {SendMail};