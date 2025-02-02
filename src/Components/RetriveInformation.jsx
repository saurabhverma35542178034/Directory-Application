import React, { useEffect, useState } from 'react'
import styles from './AddPerson.module.css'

const RetriveInformation = () => {
    const[ inputdata , setinputedata]=useState('');
    const[ retData , setretData]=useState([]);
    const handleChange = (e) => {
        setinputedata(e.target.value);
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        
        let newdata=localStorage.getItem('data');
        console.log(newdata);
        
        setretData(JSON.parse(newdata));
        
       
        
    }
    
  return (
    <div>
      <h1>Retrive data</h1>
      
     <form onSubmit={submitHandler}>
     <label htmlFor="retrive">Enter Mobile Number</label>
     <input id="retrive" type="text" placeholder='enter Mobile Number' onChange={handleChange}/>
     <button>get Data</button>
     </form>
     {retData.map((value, index) => (
                value.Phone_Number == inputdata ? (
                     <tr key={index}>
                                                <td className={styles.td}>{value.Name}</td>
                                                <td className={styles.td}>{value.Date_Of_Birth}</td>
                                                <td className={styles.td}>{value.Phone_Number}</td>
                                                <td className={styles.td}>{value.Adhaar_Number}</td>
                                                <td className={styles.td}>{value.Actions}</td>
                                            </tr>
                ) : null
            ))}

 
    </div>
  )
}

export default RetriveInformation
