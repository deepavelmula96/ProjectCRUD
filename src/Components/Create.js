import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import EmployeeDetails from './Employee';
const Create = () => {
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    let history=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const id=uuid();
        let uniqueId=id.slice(0,8);
        let a=name, b=age
        EmployeeDetails.push({id:uniqueId, name:a, age:b})
        history('/')
    }
return (
    <div>
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder=" Enter you Name" required onChange={e=>setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder=" Enter you Age" required onChange={e=>setAge(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type="submit" onClick={e=>handleSubmit(e)}>Submit</Button>
            <Button type="submit" onClick={e=>history('/')}>Cancel</Button>
        </Form>
    </div>
)
}

export default Create