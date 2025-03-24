import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login'; 

function RoutesApp() {
    return (
        <RouterRoutes>
            <Route path="/" element={<Login />} />
        </RouterRoutes>
    );
}

export default RoutesApp;