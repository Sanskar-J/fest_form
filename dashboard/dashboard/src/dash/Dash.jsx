import { useState } from "react";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return (
        data.map((post) => {
            <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{post.name}</Card.Header>
        <Card.Body>
          <Card.Title>{post.email}</Card.Title>
          <Card.Text>
            {post.email} <br/> {post.phone_no}
          </Card.Text>
        </Card.Body>
      </Card>
        })
      );
    }
  
    return (
      <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
    );
  };
const Dash = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // const fetchData = async () => {
    //     setLoading(true);
    //     try {
    //       const response = await fetch('http://localhost:8080/api/v1/post', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       }).then(response => {

    //         return response.json()
    
    //       })
    
    //       .then(data => {
    
    //         setData(data)
    
    //       })
    
    //     //   if (response.ok) {
    //     //     const result = await response.json();
    //     //     console.log(result);
    //     //     setData(result.data.reverse());
    //     //   }
    //     } catch (err) {
    //       alert(err);
    //     }
    //     finally {
    //         setLoading(false);
    //       }

    //   };
    const fetchData = async () => {

        const response = await fetch("http://localhost:8080/api/v1/post")
    
        const dat = await response.json()
    
        setData(dat)
        console.log(dat)
    
      }
    
      useEffect(() => {
        fetchData();
      }, []);
    return ( 
        <div>

      {data.length > 0 && (

        <ul>

          {data.map(user => (

            <li key={user.id}>{user.name}</li>

          ))}

        </ul>

      )}

    </div>
     );
}
 
export default Dash;