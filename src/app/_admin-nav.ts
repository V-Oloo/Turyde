import { INavData } from '@coreui/angular';

export const adminNavItems: INavData[] = [
  {
    title: true,
    name: 'TURYDE ADMIN'
  },
  {
    name: 'Admin Dashboard',
    url: '/admin',
    icon: 'fa fa-tasks'
  },
  {
    name: 'Companies',
    url: '/admin/companies',
    icon: 'fa fa-building'
  },
  {
    name: 'Routes',
    url: '/admin/routes',
    icon: 'fa fa-location-arrow'
  },

];
