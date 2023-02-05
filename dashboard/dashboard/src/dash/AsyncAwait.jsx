import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';


const AsyncAwait = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/api/v1/post")
    const data = await response.json()
    setUsers(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <Card border="primary" style={{ width: '18rem', border:'2px solid black', margin:'10px',padding:'10px'}}>
            <Card.Header>{user.name}</Card.Header>
            <Card.Body>
              {/* <Card.Title>{user.email}</Card.Title> */}
              <Card.Text>
                {user.email} <br/> {user.phone_no}
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AsyncAwait
