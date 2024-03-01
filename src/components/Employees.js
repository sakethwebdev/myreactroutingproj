import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function EmployeeUserAxios() {
  const [users, setUsers] = useState([]);
  const [searchName, ] = useState('');



  useEffect(() => {
    axios.get('http://localhost:3000/login') 
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
    <div className="container mt-3" >
      
        <hr />
      <table className="table table-striped" border={'1'}>
        <thead>
          <tr>
           
            <th>Name</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.name}>
             <td>{user.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
