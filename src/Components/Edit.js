import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import EmployeeDetails from './Employee';
// import EmployeeDetails from './Employee';

const Edit = () => {
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    const [id, setId]=useState('');
    let history=useNavigate()
    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setId(localStorage.getItem('id'));
    },[])
    let index = EmployeeDetails?.map((x, i) => x.id).indexOf(parseInt(id))

    const handleSubmit=(e)=>{
        e.preventDefault();
        let a=EmployeeDetails[index]
        console.log(a,index,EmployeeDetails,id)
        let details=EmployeeDetails[index]
        details.name=name;
        details.age=age;

        history('/')
    }

  return (
    <div>
         <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder=" Enter you Name" required value={name} onChange={e=>setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder=" Enter you Age" required value={age} onChange={e=>setAge(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type="submit" onClick={e=>handleSubmit(e)}>Update</Button>
            <Button type="submit" onClick={e=>history('/')}>Cancel</Button>
        </Form>
    </div>
  )
}

export default Edit