import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';


function Edit() {


  const [empName,setName] = useState('')
  const [empDesg,setDesg] = useState('')
  const [empSalary,setSalary] = useState(0)
  const [empId,setId]=useState('')
  const navigate = useNavigate()
 

 const handleUpdate =(event)=>{
  event.preventDefault()

   //find index number of empid that should updated
   let index = Employee.map((item)=>item.empId).indexOf(empId)
   let emp = Employee[index]
   console.log(emp);
   emp.empId = empId
   emp.empName = empName
   emp.empSal = empSalary
   navigate('/')



 }


  useEffect(()=>{
    setName(localStorage.getItem("empName"))
    setDesg ( localStorage.getItem("empDesg"))
    setSalary(JSON.parse( localStorage.getItem("empsalary")))
    setId ( localStorage.getItem("empId"))



  },[])
  return (
    <div className='my-5 p-5'>
    <h1 className='text-primary text-center'>UPDATE EMPLOYEE DETAILS</h1>
    
    
    

    <Form className='border border-4  mt-5 p-5 '>
    
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" value={empName} placeholder="Enter employee Name"
    onChange={(event)=>setName(event.target.value)}
    
    />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicDesg">
    <Form.Control type="text" value={empDesg} placeholder="Enter employee Designation "
        onChange={(event)=>setDesg(event.target.value)}


    />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicSalary">
    <Form.Control type="text" value={empSalary} placeholder="Enter employee Salary" 
        onChange={(event)=>setSalary(event.target.value)}


    />
    </Form.Group>

   
    <Button onClick={(event)=>handleUpdate(event)}  variant="primary" type="submit">
      Update
    </Button>
  </Form>
      </div>

    


  
  )
}

export default Edit