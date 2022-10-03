import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../pages/DefaultPage';
import Status from '../components/Statusbar';
import Profile from '../components/Profile';
import Publishes from '../components/Publishes';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Default />} />
                <Route path="/feed" element={
                    <>
                        <Status />
                        <Profile />
                        <Publishes />
                    </>
                } />
                <Route path="*" element={<Default />} />

            </Routes>
        </>
    )
}

export default Router;