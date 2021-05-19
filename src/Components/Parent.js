import React from 'react';
import Sherry from './assets/Sherry.jpg';
import Child from './Child.js'


class Parent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'sherry',
            imgUrl:Sherry
        }
    }

    render(){
        return(
            <>
            <h2>Parent</h2>
            <Child
            catName={this.state.name}
            imgUrl={this.state.imgUrl}
            />
            </>
        )

    }


}


export default Parent;