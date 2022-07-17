import {Card} from 'react-bootstrap'




function Output(props){
    return(
        <div> 
            <Card>
                <Card.Body>{props.name} ({props.age} years old)</Card.Body>
            </Card>
        </div>
    )
} 

export default Output;