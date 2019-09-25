import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='landing-div'>
                <h3>CS21 Build Week 1 - Team L - MUD</h3>
                <Link className='landing-link' to='/login'>Login</Link>
                <Link className='landing-link' to='/register'>Register</Link>
            </div>
        )
    }
}