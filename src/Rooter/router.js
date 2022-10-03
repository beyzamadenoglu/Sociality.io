import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Deneme from '../pages/Deneme';
import Empty from '../pages/Deneme';
import Status from '../components/Statusbar';
import Profile from '../components/Profile';
import Publishes from '../components/Publishes';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Deneme />} />
                <Route path="/empty" element={<Empty />} />
                <Route path="/feed" element={
                    <>
                        <Status />
                        <Profile />
                        <Publishes />
                    </>
                } />
                <Route path="*" element={<Empty />} />

            </Routes>
        </>
    )
}

export default Router;