import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import { useNavigate,Link } from 'react-router-dom';

function Home() {
 const navigate = useNavigate();
  const handledelete = (empId)=>{
    let index = Employee.map((item)=>item.empId).indexOf(empId)
    Employee.splice(index,1)
    navigate('/');
  }
   const handleEdit = (empId,empName,empDesg,empSal)=>{
    localStorage.setItem("empId",empId)
    localStorage.setItem("empName",empName)
    localStorage.setItem("empDesg",empDesg)
    localStorage.setItem("empsalary",empSal)


   }
  //console.log(Employee);
  return (
    <>
        <h1 className=' text-primary my-5 mx-5 text-center'>LIST OF EMPLOYEES &nbsp;
       <Link to={'/add'}><Button variant='success'><i class="fa-solid fa-user-plus"></i>Add</Button></Link> 
        </h1>

    <div style={{margin:"8rem"}}>
     <Table striped bordered hover variant="light" >
      <thead>
        <tr style={{color:'blue'}}>
          <th>Employee Name</th>
          <th>Employee Designation</th>
          <th>Employee Salary</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {
          Employee && Employee.length>0 ?
          Employee.map((item)=>(
            <tr >
            <td>{item.empName}</td>
            <td>{item.empDesg}</td>
            <td>{item.empSal}</td>
            <td>
              <Link to = '/edit'>
              <Button onClick={()=>handleEdit(item.empId,item.empName,item.empDesg,item.empSal)} variant='warning'>
              <i class="fa-solid fa-user-pen"></i>
              </Button>
              
              </Link>
             
              &nbsp;
              <Button onClick={()=>handledelete(item.empId)} variant='danger'>
              <i class="fa-solid fa-trash"></i>
              </Button>
            </td>
          </tr>
          ))
          :"no data to display"
       
}
        
      </tbody>
    </Table>
    </div>
    
    </>
  )
}

export default Home