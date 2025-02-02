import React, { useState ,useEffect} from 'react'
import styles from './AddPerson.module.css'

const AddNewPerson = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : [];
});


    const [formVisible , showFormVisible]=useState(false);
    const [newPerson, setNewPerson] = useState({
        Name: '',
        Date_Of_Birth: '',
        Phone_Number: '',
        Adhaar_Number: '',
        Actions: 'Delete'
    });

    const deleteData =(num)=>{
    let savedData = JSON.parse(localStorage.getItem('data')) || [];
    savedData = savedData.filter(person => person.Phone_Number !== num);
    localStorage.setItem('data', JSON.stringify(savedData));
     setData(savedData);
    
    }
    const ShowForm = () => {
        
        showFormVisible(!formVisible);
    }
     
    useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

   const handleSubmit=(e)=>{
    e.preventDefault();
    //   console.log(e.target);
    setData([...data , newPerson]);
     
    setNewPerson({
      Name: '',
      Date_Of_Birth: '',
      Phone_Number: '',
      Adhaar_Number: '',
      Actions: 'Delete'
  });
  showFormVisible(false);
      
   } 
   const handleChnage=(e)=>{
       const {name , value}=e.target;
       setNewPerson(prevState=>({
        ...prevState,
        [name]:value
       }))
      
      
      
   }

  return (
    <div>
      <table className={styles.table}>
        <thead>
        <tr >
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Date Of Birth</th>
            <th className={styles.th}>Phone Number</th>
            <th className={styles.th}>Adhaar Number</th>
            <th className={styles.th}><button>Actions</button></th>
        </tr>
        </thead>
        <tbody>
        {data.map((value, index) => (
                        <tr key={index}>
                            <td className={styles.td}>{value.Name}</td>
                            <td className={styles.td}>{value.Date_Of_Birth}</td>
                            <td className={styles.td}>{value.Phone_Number}</td>
                            <td className={styles.td}>{value.Adhaar_Number}</td>
                            <td className={styles.td}><button onClick={()=>deleteData(value.Phone_Number)}>{value.Actions}</button></td>
                        </tr>
                    ))}
        </tbody>
      </table>



      <br /><br /><br /> <br /> <br /><br />
      <button onClick={ShowForm}>ADD</button>
      {
        formVisible ? <form onSubmit={handleSubmit}>
                   <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        onChange={handleChnage}
                        value={newPerson.Name}
                       
                    />
                    <input
                        type="date"
                        name="Date_Of_Birth"
                        placeholder="Date Of Birth"
                        onChange={handleChnage}
                        value={newPerson.Date_Of_Birth}
                        
                    />
                    <input
                        type="number"
                        name="Phone_Number"
                        placeholder="Phone Number"
                        onChange={handleChnage}
                        value={newPerson.Phone_Number}
                       
                    />
                    <input
                        type="number"
                        name="Adhaar_Number"
                        placeholder="Adhaar Number"
                        onChange={handleChnage}
                        value={newPerson.Adhaar_Number}
                        
                    />
                    <button type="submit">Save</button> 
        </form> : ''
      }
    </div>
  )
}

export default AddNewPerson
