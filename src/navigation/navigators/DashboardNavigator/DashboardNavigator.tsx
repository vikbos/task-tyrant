import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { TopNav } from '../../../components/navigation/TopNav';

const Test = () => <div>HOME</div>;

export const DashboardNavigator: React.FC = () => {
  return (
    <>
      <TopNav />
      <div style={{ display: 'flex', height: '100vh' }}>
        <aside
          style={{
            width: '250px',
            backgroundColor: '#f4f4f4',
            padding: '1rem',
            boxSizing: 'border-box',
          }}
        >
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <NavLink
                  to="/dashboard"
                  end
                  style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none',
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <NavLink
                  to="/dashboard/projects"
                  style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none',
                  })}
                >
                  Projects
                </NavLink>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <NavLink
                  to="/dashboard/settings"
                  style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none',
                  })}
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route index element={<Test />} />
            {/* <Route path="projects" element={<ProjectsScreen />} />
            <Route path="settings" element={<SettingsScreen />} /> */}
            {/* Redirect any unknown nested route to home */}
            {/* <Route path="*" element={<Test />} /> */}
          </Routes>
        </main>
      </div>
    </>
  );
};
