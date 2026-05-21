import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [employee, setEmployee] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/')
    .then(res=>res.json())
    .then(data=>setEmployee(data))
  }, [])


  return (
    <>
    <p>All employees</p>
    {employee && employee.map(employee=>
      (
        <div key={employee.id}>
          {employee.name}
        </div>
      )
    )}
      
    </>
  )
}

export default App
