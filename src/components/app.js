import React from 'react';
import { Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import About from './about';
import Home from './home';
import Nav from './nav';
import PublicList from './public_list';
import Quotes from './quotes';
import SecretList from './secret_list';
import SignIn from './sign_in';
import SignUp from './sign_up';
import secret_list from './secret_list';


const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/public_list" component={PublicList}/>
            <Route exact path="/secret_list" component={secret_list}/>
            <Route exact path="/quotes" component={Quotes}/>
            <Route exact path="/sign_in" component={SignIn}/>
            <Route exact path="/sign_up" component={SignUp}/>

        </div>
    </div>
);

export default App;
