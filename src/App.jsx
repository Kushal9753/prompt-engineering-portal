import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ContentViewer from './components/ContentViewer';
import Home from './pages/Home';
import Basics from './pages/Basics';
import Techniques from './pages/Techniques';
import Examples from './pages/Examples';
import Resources from './pages/Resources';

// Pages that use the sidebar layout (topic reader)
const SIDEBAR_PATHS = ['/topic'];

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const showSidebar = SIDEBAR_PATHS.some((p) => location.pathname.startsWith(p));

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ScrollProgress />
      <Navbar
        toggleSidebar={() => setIsSidebarOpen((o) => !o)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1 max-w-[1400px] w-full mx-auto relative">
        {showSidebar && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}

        <div className="flex-1 w-full min-w-0">
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/basics"      element={<Basics />} />
            <Route path="/techniques"  element={<Techniques />} />
            <Route path="/examples"    element={<Examples />} />
            <Route path="/resources"   element={<Resources />} />
            <Route path="/topic/:id"   element={<ContentViewer />} />
            <Route path="*"            element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <AppLayout />
    </DarkModeProvider>
  );
}

export default App;