import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'


const Category = ({title="Name", description="One_line", image="link"}) => {
    return (

        <div>
        <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src="{image}" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" href="/entry">get quote</Button>
            </Card.Body>
        </Card>
        </div>



    )
}


export default Category;