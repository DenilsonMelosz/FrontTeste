import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login'; 
import Register from '../pages/Register/Register';

function RoutesApp() {
    return (
        <RouterRoutes>
            <Route path="/" element={<Login />} />
            <Route path='/Register' element={ <Register/>} />
            
        </RouterRoutes>
    );
}

export default RoutesApp;