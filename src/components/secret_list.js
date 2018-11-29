import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => {

    return (
        <div>
        <h1 className="center" >Secret Operatives List</h1>
        <ol>
            <li>Jim</li>
            <li>Jane</li>
            <li>Michael E</li>
            <li>Michael C</li>
            <li>Kim</li>
            <li>Joong</li>
            <li>Un</li>
        </ol>
    </div>
    )
}
export default auth(SecretList);