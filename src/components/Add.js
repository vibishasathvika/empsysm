import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import Employee from '../Employee'
import { useNavigate } from 'react-router-dom';

function Add() {
  const [empName,setName] = useState('')
  const [empDesg,setDesg] = useState('')
  const [empSalary,setSalary] = useState(0)
  const navigate = useNavigate()
  
  const handleSubmit =(event)=>{
    //to prevent auto refresh method
    event.preventDefault()
    console.log('name:',empName);
  console.log("designation:",empDesg);
  console.log("salary:",empSalary);
  //generate uuid
  const ids = uuid()
  let uniqeId = ids.slice(0,8)
  let salary = Number(empSalary)
console.log(uniqeId);
Employee.push({
        empId:uniqeId,
        empName,
        empDesg,
        empSalary:salary
        
        
})
navigate('/')
  }



  return (
    <div className='my-5 p-5'>
      <h1 className='text-primary text-center'>ADD NEW EMPLOYEE DETAILS</h1>
       

      

      <Form className='border border-4  mt-5 p-5 '>
      
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Control type="email" placeholder="Enter employee Name"
      onChange={(event)=>setName(event.target.value)}
      
      />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDesg">
      <Form.Control type="email" placeholder="Enter employee Designation "
            onChange={(event)=>setDesg(event.target.value)}

      />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSalary">
      <Form.Control type="email" placeholder="Enter employee Salary" 
            onChange={(event)=>setSalary(event.target.value)}

      />
      </Form.Group>

     
      <Button  onClick={(event)=>handleSubmit(event)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>

      
  

    
  )
}

export default Add