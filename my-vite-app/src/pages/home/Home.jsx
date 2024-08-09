import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){

    return(
    <div>
        <div>
            <h1>
                <Link to='/login'>Login</Link>
            </h1>
            <br/>
            <h1>    
                <Link to='/signup'>Signup</Link>
            </h1>
        </div>

        <br/>
        <br/>
        <br/>

       
     

    </div>
    )

}