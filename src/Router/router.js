import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../pages/DefaultPage';
import FeedPage from '../pages/FeedPage';


function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="*" element={<Default />} />

            </Routes>
        </>
    )
}

export default Router;