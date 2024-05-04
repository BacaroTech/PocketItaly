export type ComponentCardItem = {
  className?: string;
  images: { light: string; dark?: string };
};
export type RouteProps = {
  title: string;
  icon: string;
  href: string;
  group: boolean;
  card?: ComponentCardItem;
};
export const zeccaList: RouteProps[] = [
  {
    title: 'Map',
    href: '/zecca/map',
    group: false,
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`,
    card: {
      images: { light: './assets/images/italy-map.svg'},
    },
  },
  {
    title: 'Web Site',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>',
    href: '/zecca/web-site',
    group: false,
    card: {
      images: { light: './assets/images/web-tables.svg' },
    },
  },
  {
    title: 'Segnalazioni',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>',
    href: '/zecca/report',
    group: false,
    card: {
      images: { light: './assets/images/tables-light.svg' },
    },
  }
];
export const resellerList: RouteProps[] = [
  {
    title: 'Negozi',
    href: '/factory/store',
    group: false,
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`,    
    card: {
      className: 'w-56',
      images: { light: 'accordion-light.svg', dark: 'accordion-dark.svg' },
    },
  },
  {
    title: 'Inventario',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>',
    href: '/factory/warehouse',
    group: false,
    card: {
      className: 'w-56',
      images: { light: 'accordion-light.svg', dark: 'accordion-dark.svg' },
    },
  },
  {
    title: 'Profilo',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>',
    href: '/factory/profile',
    group: false
  }
]
export const factoryList: RouteProps[] = [

  {
    title: 'Crea Lotto',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>',
    href: '/factory/create-product',
    group: false,
    card: {
      className: 'w-56',
      images: { light: 'alerts-light.svg', dark: 'alerts-dark.svg' },
    },
  },
  {
    title: 'Crea Token',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>',
    href: '/factory/create-token',
    group: false,
    card: {
      className: 'w-56',
      images: { light: 'alerts-light.svg', dark: 'alerts-dark.svg' },
    },
  },
  {
    title: 'Profilo',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>',
    href: '/factory/profile',
    group: false
  }
];
