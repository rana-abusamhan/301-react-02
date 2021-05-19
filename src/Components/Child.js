import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Child extends React.Component{

    constructor(props){
        super(props);
        this.state={
            numberOfPets:0
        }
    }

    increaseNumberOfPets = () =>{
        this.setState({
            numberOfPets: this.state.numberOfPets+1,
        })
    }

    render(){
        return(
        //     <div>
        //    <p>{this.props.catName}</p>
        //    <img onClick={this.increaseNumberOfPets} src={this.props.imgUrl} alt={this.props.catName}/>
        //     <p>😺: {this.state.numberOfPets}</p>
        //     </div>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={this.props.imgUrl} />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>

        )

    }


}


export default Child;