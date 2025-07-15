import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '@/Sidebar/Sidebar';
import Home from '@/pages/Home/Home.tsx';
import AllCourses from '@/pages/AllCourses/AllCourses.tsx';
import UserCourses from '@/pages/UserCourses/UserCourses.tsx';
import Messages from '@/pages/Messages/Messages.tsx';
import Settings from '@/pages/Settings/Settings.tsx';
import '@/index.css';

function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/allCourses', element: <AllCourses /> },
    { path: '/userCourses', element: <UserCourses /> },
    { path: '/messages', element: <Messages /> },
    { path: '/settings', element: <Settings /> },
  ];
  return(
    <>
      <Router>
        <Sidebar/>
        <div
          className="mainBlock"
        >
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
