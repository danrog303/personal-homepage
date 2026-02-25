import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
