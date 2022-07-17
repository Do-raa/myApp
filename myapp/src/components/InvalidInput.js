import {Card, Button} from 'react-bootstrap';



function InvalidInput(){
    
    return(
        <div> 
            <Card>
                <Card.Header as="h5">Invalid Input</Card.Header>
                <Card.Body>
                <Card.Text>
                Please enter a valid age !
                </Card.Text>
                <Button variant="primary">Okay</Button>
                </Card.Body>
            </Card>
        </div>
    )
} 

export default InvalidInput;