import React,{useState} from 'react'
import axios from "axios";
import validator from 'validator'
const Email = () => {
    const [email ,setEmail]=useState("");
    
    const sendEmail = async() =>{
        if(!validator.isEmail(email)){
            alert("Enter Valid Email");
            return;
        }
        const data = {
          event: "send_email",
          user: {
            email: email,
          },
          data: {
            user_name: "John Doe",
          },
        };
      
      try{
        const response = await axios.post(
          "https://api.ravenapp.dev/v1/apps/20dae088-1c8d-4914-b12c-f107c4f47aa3/events/send",
          data,
          {
            headers:{
              'Content-Type': 'application/json',
              'Authorization': 'AuthKey aEUW15d/ecFfv2Vbr6/ZkPu71ATJ/NOJpdPDGamWeJs='
            }
          }
        );
    
        if(response.status === 200){
          const data = response.data;
          console.log('Success: ',data.success);
          console.log('Id: ',data.id);
        }else{
          throw Error();
        }
    
      }catch(error){
        console.log(error);
      }
    }
  return (
    <div className='email_comp'>
    <div className='email_input'>
        <input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          name="email"
        />
      </div>    
    <button onClick={()=>sendEmail()} className="email_button">
        Send Email
      </button> 
    </div>
  )
}

export default Email