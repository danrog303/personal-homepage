import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects/:slug" element={<ProjectPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
