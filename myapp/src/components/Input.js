import { useState } from 'react';
import {Button, Form}  from 'react-bootstrap';
import Output from './Output'; 
import InvalidInput from './InvalidInput';


function Input() {  
  const [name, setName] = useState(''); 
  const [age, setAge] = useState('');  
  const [isShown, setIsShown] = useState(false); 
 
     const submitHandler = (event)=> {  
    event.preventDefault(); 
    console.log('clicked');
    setIsShown(true);
     };

  return ( 
    <div>
    
   
 
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age(years)</Form.Label>
        <Form.Control type="number" value={age} placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary"  type="submit" >
        Add User 
      </Button> 
      {isShown && age > 0? <div><Output name={name} age={age}/></div>:<div><InvalidInput/></div>}
    </Form> 
    </div>
  );
}

export default Input;