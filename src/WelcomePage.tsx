import { Component } from 'react'

class WelcomePage extends Component {
    constructor() {
        super(1);

        this.state = {
            username: "friend",
        }

    }
    changeState = (val: String) => {
        this.setState({ username: val })
    }
    render() {

        return (
            <>
                <input type="text" placeholder='My name is...' onKeyUp={(event) => this.changeState(event.target.value)} />
                < p > And hello {this.state.username}</p >
            </>
        )
    }
}

export default WelcomePage