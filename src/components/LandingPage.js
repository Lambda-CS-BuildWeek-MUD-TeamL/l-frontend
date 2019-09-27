import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='landing-div'>
                <h3>You're about to have an</h3>
                <h1 className="game-title">Existential Crisis</h1>
                <h3>CS21 Build Week 1 - Team L - MUD</h3>
                <span>Please create an account or login to start playing.</span>
                <Link className='landing-link' to='/login'>Login</Link>
                <Link className='landing-link' to='/signup'>Sign Up</Link>
            </div>
        )
    }
}