import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Home = () => {

   const data = JSON.parse(localStorage.getItem("mobileInfo"));

   const renderList = (data, index) => {
   return (
      <>
      <Row>
         <Col md={6}>
        <Card item key={index} style={{ width: '18rem', display: 'flex', flexDirection: 'row'}} spacing={4} className="mt-4 mb-2">
              <Card.Body>
               
                    <Card.Title>
                     {data.name}
                    </Card.Title>
                    <Card.Text>
                       Brand: {data.brand}
                    </Card.Text>
                    <Card.Text>
                       Price: INR {data.price}
                    </Card.Text>
                    <Card.Text>
                       color: {data.color}
                    </Card.Text>
                    <Card.Text>
                       ROM: {data.rom}
                    </Card.Text>
                    <Card.Text>
                       RAM: {data.ram}
                    </Card.Text>       
             </Card.Body>
        </Card> 
        </Col>
        </Row>
        </>
    )
   }

return <div className="grid">
   {data.map(renderList)}
   <div style={{ marginBottom: '10px', fontSize: '20px'}}>
   <Link to="/form-data"> Back to Add Information Form</Link>
   </div>
   </div>;
}

export default Home
