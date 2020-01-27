// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super()
        this.state={
            secondsLeft: props.initialCount
        }
    }
    render(){
        return(
            <div>
                {(this.state.secondsLeft===0)? <p>Boom!</p>:<p>{this.state.secondsLeft} seconds left before I go boom!</p>}
            </div>
        )
    }
}
export default Bomb