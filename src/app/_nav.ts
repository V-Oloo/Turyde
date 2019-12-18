import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
      title: true,
      name: 'COMPANY'
  },
  {
    name: 'Dashboard',
    url: '/company/home',
    icon: 'fa fa-tasks'
  },
  {
    name: 'Routes',
    url: '/company/routes',
    icon: 'fa fa-map-marker',
  },
  {
    name: 'Drivers',
    url: '/drivers',
    icon: 'icon-speedometer'
  },
  {
    name: 'Vehicles',
    url: '/vehicles',
    icon: 'fa fa-bus'
  },

  // {
  //   name: 'Company',
  //   url: '/company',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Dashboard',
  //       url: '/company/home',
  //       icon: 'icon-speedometer'
  //     },
  //     {
  //       name: 'Routes',
  //       url: '/company/routes',
  //       icon: 'icon-puzzle',
  //     },
  //   ]
  // },
  // {
  //   name: 'Drivers',
  //   url: '/drivers',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Drivers',
  //       url: '/drivers',
  //       icon: 'icon-speedometer'
  //     },
  //   ]
  // },
  // {
  //   name: 'Vehicles',
  //   url: '/vehicles',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Vehicles',
  //       url: '/vehicles',
  //       icon: 'icon-speedometer'
  //     },
  //   ]
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
];
