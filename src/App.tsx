import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { Admin, Auth, Frontend } from '@/layouts';

import RequireUser from '@/modules/auth/pages/RequireUser';
import LoginPage from '@/modules/auth/pages/Login';
import RegisterPage from '@/modules/auth/pages/Register';
import HomePage from '@/modules/frontend';
import UnauthorizePage from '@/modules/error/Unauthorize';
import ProfilePage from '@/modules/auth/pages/Profile';
import DashboardPage from '@/modules/dashboard/pages';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Frontend />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path='/admin' element={<Admin />}>
          <Route index element={<DashboardPage />} />

          {/* Private Route */}
          <Route element={<RequireUser allowedRoles={['admin']} />}>
            <Route path='profile' element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path='unauthorized' element={<UnauthorizePage />} />
        <Route element={<Auth />}>
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
