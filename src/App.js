import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="App">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <h1>Welcome to the Gmail-like App!</h1>
                <p>Click the menu icon to open the sidebar.</p>
            </div>
        </div>
    );
}

export default App;

