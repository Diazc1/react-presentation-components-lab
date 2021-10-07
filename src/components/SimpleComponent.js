// Code SimpleComponent Here

import React, { Component } from "react";

export default class SimpleComponent extends Component {
    //The component should have a state property called mood that has a default value of happy.
    constructor(props) {
        super(props);

        this.state = {
            mood: 'happy'
        }
    }

//The component should implement a handleClick function that can serve as a callback 
//to the <div>'s click event. When clicked, the component's mood should toggle between happy and sad states.
    handleClick = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
    }


    
    //The component should simply render its current mood state to the page in a div.
    render() {
        return <div onClick={this.handleClick}>
        {this.state.mood}
        </div>
    }


}