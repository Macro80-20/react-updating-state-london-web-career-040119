// Code ClickityClick Component Here
import React, {Component} from 'react'

export default class ClickityClick extends Component {

    state = {
        hasBeenClicked: false
    }

    clickedToggler = () => {
    this.setState(prevState => {
        return {
            hasBeenClicked: !prevState.hasBeenClicked
        }   
    }
    )}

    // this.setState((prevState, props) => {
    //     return {counter: prevState.counter + props.step};
    //   })

    render(){
        return(
            <div>
                <p> I have {this.state.hasBeenClicked? null: "not"} been clicked!</p>
                <button onClick = {this.clickedToggler.bind(this)}>Click me!</button>
            </div>

        )
    }

}