import React from 'react'
import { Engage, Listen, Notifications, Publish, Report, Summary } from '../assets/Images/index';


export const SidebarItems = [
    {
        title: 'Notifications',
        icon: <Notifications />,
        name: 'nav-text',
        child: ['Notification', 'Notifications'],
        number: 29,
        expand: false
    },

    {
        title: 'Summary',
        icon: <Summary />,
        name: 'nav-text',
        child: ['Summary', 'Sum']
    },

    {
        title: 'Publish',
        icon: <Publish />,
        name: 'nav-text',
        child: ['Compose', 'Feed']
    },

    {
        title: 'Engage',
        icon: <Engage />,
        name: 'nav-text',
        child: ['Engage', 'Engages']
    },

    {
        title: 'Listen',
        icon: <Listen />,
        name: 'nav-text',
        child: ['Listen', 'Listens']
    },

    {
        title: 'Report',
        icon: <Report />,
        name: 'nav-text',
        child: ['Report', 'Reports']
    },

]