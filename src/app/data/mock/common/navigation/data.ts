/* tslint:disable:max-line-length */
import { TreoNavigationItem } from '@treo/components/navigation';

export const defaultNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Admin',
        subtitle: 'List of administrator modules',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'starter.example.1',
                title: 'Users 1 (Finance)',
                type : 'basic',
                link : '/finance'
            },
            {
                id   : 'starter.example.2',
                title: 'Users 2 (Contacts)',
                type : 'basic',
                link : '/contacts'
            },
            {
                id   : 'starter.dummy.1',
                title: 'Partner Companies',
                type : 'basic'
            },
            {
                id   : 'starter.dummy.2',
                title: 'Clients',
                type : 'basic'
            },
            {
                id   : 'starter.dummy.3',
                title: 'Staffs',
                type : 'basic'
            }
        ]
    },
    {
        id      : 'starter1',
        title   : 'Client',
        subtitle: 'Stand-alone client features',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'profile',
                title: 'Profile',
                type : 'basic',
                link : '/profile'
            }
        ]
    },
    {
        id      : 'starter2',
        title   : 'Products',
        subtitle: 'Shows the available items',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'starter.example1',
                title: 'Trees',
                type : 'basic'
            },
            {
                id   : 'starter.dummy.2',
                title: 'Plants',
                type : 'basic'
            },
            {
                id   : 'starter.dummy.3',
                title: 'Vegetables',
                type : 'basic'
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'starter3',
        title   : 'Settings',
        subtitle: 'Heart and soul of the system',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'starter.example',
                title: 'Help',
                type : 'basic'
            },
            {
                id   : 'logout',
                title: 'Logout',
                type : 'basic',
                link : '/sign-in'
            }
        ]
    }
];
export const compactNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        type    : 'aside',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: TreoNavigationItem[] = [
    {
        id   : 'starter.example.1',
        title: 'Users 1 (Finance)',
        type : 'basic',
        icon : 'heroicons:chart-pie',
        link : '/finance'
    },
    {
        id   : 'starter.example.2',
        title: 'Users 2 (Contacts)',
        type : 'basic',
        icon : 'heroicons:chart-pie',
        link : '/contacts'
    },
    {
        id   : 'starter.dummy.1',
        title: 'Dummy menu item #1',
        icon : 'heroicons:calendar',
        type : 'basic'
    },
    {
        id   : 'starter.dummy.2',
        title: 'Dummy menu item #1',
        icon : 'heroicons:user-group',
        type : 'basic'
    },
    {
        id   : 'logout',
        title: 'Dummy menu item #1',
        icon : 'heroicons:user-group',
        type : 'basic',
        link : '/sign-in'
    },
    {
        id   : 'profile',
        title: 'Profile',
        icon : 'heroicons:calendar',
        type : 'basic',
        link : '/profile'
    },
];
export const horizontalNavigation: TreoNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        type    : 'group',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
