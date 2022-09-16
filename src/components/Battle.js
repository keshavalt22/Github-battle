import React from 'react';

class Battle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            player1: "",
            player2: "",
            click1: false,
            click2: false,
        }
    }

    handleChange1 = (event) => {
        this.setState({player1: event.target.value});
    }

    handleChange2 = (event) => {
        this.setState({player2: event.target.value});
    }

    handleSubmit1 = () => {
        this.setState((prevState) => ({
            click1: !prevState.click1,
        }))
    }

    handleSubmit1 = () => {
        this.setState((prevState) => ({
            click2: !prevState.click2,
        }))
    }

    render(){
        return(
            <div>
                <div className='battle'>
                    <h2>Players</h2>
                    <div className='center'>
                        {
                            !this.state.click1 ? (
                                <div className='submit'>
                            <h3>Player One</h3>
                            <input type="text" 
                                placeholder='Github Username' 
                                value={this.state.player1}
                                onChange = {this.handleChange1}
                            />
                            <input  type="submit"
                                onClick={this.handleSubmit1}
                            />
                        </div>
                            ) : (
                                <div>
                                    <h4>{this.state.player1}</h4>
                                </div>
                            )
                        }
                        {
                            !this.state.click2 ? (
                                <div className='submit'>
                            <h3>Player Two</h3>
                            <input type="text" 
                                placeholder='Github Username'  
                                value={this.state.player2}
                                onChange = {this.handleChange2}
                            />
                            <input type="submit"
                                onClick={this.handleSubmit2}
                            />
                        </div>
                            ) : (
                                <div>
                                    <h4>{this.state.player2}</h4>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

}


export default Battle;