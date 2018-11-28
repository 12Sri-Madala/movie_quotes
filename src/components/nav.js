import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        const navStyle = {
            padding: '0 8px'
        }

        return (
            <nav style={navStyle} className='green darken-4'>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Movie Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/public_list">Public List</Link>
                        </li>
                        <li>
                            <Link to="/secret_list">Secret List</Link>
                        </li>
                        <li>
                            <Link to="/quotes">Quotes</Link>
                        </li>
                        <li>
                            <Link to="/sign_in">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/sign_up">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;