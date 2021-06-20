import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'



const UserList = () => {
 
    const [user,setUser] = useState([])
    const [load , setLoad ] = useState(true)    
     
     useEffect(()=>{
             axios.get('https://jsonplaceholder.typicode.com/users')
                  .then(res=>{setUser(res.data) 
                                setLoad(false)})
                  .catch(err=>{console.log(err)})
         },[])    
    return (
        <div className='liste'>
            {load ? <Spinner animation="border" />:
            (user.map((el, key) => <UserCard key={el.id} user={el}/>))}
        </div>
    )
}

export default UserList

