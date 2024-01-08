import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login'
import ProtectedRoute from './protectedRoutes';


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/home" element={<Home />} />
            </Route>
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default AppRoutes;