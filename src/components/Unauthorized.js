import React from 'react'
import '../App.scss';

export default class Unauthorized extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div className='unauthorized-div'>
                <h1 className='unauthorized-header'>
                    You are unauthorized to view that page!
                </h1>
                <h4 className='unauthorized-subhead'><a href='/login'>Back to login</a></h4>
            </div>
        )
    }
}