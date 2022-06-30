import React from "react";
import Card from 'react-bootstrap/Card';

function card(props){
    return(
        <Card>
            <Card.Img variant="top" src={props.imageUrl}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                          {props.bodyCard}
                        </Card.Text>
                </Card.Body>
        </Card>);
}



export default card