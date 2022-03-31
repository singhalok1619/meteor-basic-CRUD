import React, {useState}  from "react";
import { employeeCollection } from "../api/employee";
import {useTracker} from 'meteor/react-meteor-data';



export const UserTable =() => {

    const [data, setData] = useState({
        // id:""
        Sr_no:"",
        name:"",
        position:"" 

    })
   

    const employee = useTracker(() => {
        return employeeCollection.find().fetch();
      });

    //   console.log(employee,'emp')


    return(<>
  <div  style={{
            // border:'1px solid black',
            width:'30vw',
            height:'90vh',
            display:'block',
            float:'right',
            // margin:'0 auto',
            boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            borderRadius:'10px',
            background:'#7897AB',
            marginRight:'12%'
        }}>

            <table style={{
                border:'1px solid #87AAAA',
                margin:'0 auto',
                width:'100%'
            }}>
            <tr style={{
                border:'1px solid #87AAAA',
                margin:'0 auto'
            }}>
    <th style={{
                border:'1px solid #87AAAA',
                margin:'0 auto',
              
            }}>Sr. No.</th>
    <th style={{
                border:'1px solid #87AAAA',
                margin:'0 auto'
            }}>Name</th>
    <th style={{
                border:'1px solid #87AAAA',
                margin:'0 auto'
            }}>Position</th>
             <th style={{
                border:'1px solid #87AAAA',
                margin:'0 auto'
            }}>Edit</th>
  </tr>


  {employee.map((item, index)=> 

<tr style={{
    border:'1px solid #87AAAA',
    margin:'0 auto'
}} 
>
<td style={{
    border:'1px solid #87AAAA',
    margin:'0 auto'
}}>{item.Sr_no}</td>
<td style={{
    border:'1px solid #87AAAA',
    margin:'0 auto'
}}>{item.name}</td>
<td style={{
    border:'1px solid #87AAAA',
    margin:'0 auto'
}}>{item.position}</td>
    <td style={{
    border:'1px solid #87AAAA',
    margin:'0 auto'
}}><button style={{
    cursor:'pointer'
}} 
type='button'
onClick={()=> employeeCollection.remove(item._id) }
>Delete</button></td>
</tr>
  )}
 
            </table>

        </div>


        <div style={{
            // border:'1px solid black',
            width:'30vw',
            height:'90vh',
            // margin:'0 auto',
            boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            borderRadius:'10px',
            background:'#7897AB',
            marginLeft:'12%'
        }}>
            <h3 style={{
                color:'#142F43',
                position:'absolute',
                top:'6%',
                left:'23%'
            }}>Employee Table</h3>

            <form style={{
                // border:'1px solid black',
                display:'block',
                position:'absolute',
                top:'25%',
                left:'14%'
            }} 
            
            >
            <input style={{
                display:'block',
                marginTop:'5%'
            }} type='text'
             placeholder="Sr. No."
            onChange = { (e)=> {setData({...data, Sr_no:e.target.value})}}
            />
            <input style={{
                display:'block',
                marginTop:'5%'
            }} type='text' placeholder="Name"
            onChange = { (e)=> {setData({...data, name:e.target.value})}}
            
            />
            <input style={{
                display:'block',
                marginTop:'5%'
            }} type='text' placeholder="Position"
            onChange = { (e)=> {setData({...data, position:e.target.value})}}
            />

            <button style={{
                display:'block',
                position:'absolute',
                top:'250%',
                background:'#C74B50',
                width:'7em',
                height:'3em',
                border:'none',
                borderRadius:'4px',
                left:'65%',
                cursor:'pointer'
                
            }}
            onClick={()=> {employeeCollection.insert({...data})}}
            type='button'
            >Create</button>
            </form>
            

        </div>

      
        </>  )
}