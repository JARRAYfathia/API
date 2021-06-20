import React from 'react'
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import { Spinner } from 'react-bootstrap'

function UserCard({user, load}) {
    return (
        <div>
                    {load ? <Spinner animation="border" />:
                    <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupQpbrGErpE4t6puLWyfyN-CBMOsA4ccjig&usqp=CAU" />
                     <Card.Body>
                      <Card.Title>Name: {user.name}</Card.Title>
                      <Card.Text>{user.username}</Card.Text>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroupItem>Adress: {user.address.city}</ListGroupItem>
                     <ListGroupItem>Company: {user.company.name}</ListGroupItem>
                     <ListGroupItem style={{color:'blue'}}>Website: {user.website}</ListGroupItem>
                    </ListGroup>
                    </Card>      }
        </div>
    )
}

export default UserCard

