import React from 'react';
import { useLocation } from 'react-router-dom';
import App from '../App';
import Register from '../screen/register/Register';
import Login from '../screen/login/Login';
function ChangeRouter() {
    let currentPath = useLocation().pathname;
    function change() {
        switch(currentPath){
            case "/register":
                return <Register/>
            case "/login":
                return <Login/>
            default:
                return <App/>
        }
    }
    return (
        <div>
            {change()}
        </div>
    );
}

export default ChangeRouter;
