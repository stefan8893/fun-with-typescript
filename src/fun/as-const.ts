const routes = {
  home: '/',
  app: '/app',
  user: '/app/user',
} as const;

type Route = (typeof routes)[keyof typeof routes];

function doSomethingWithARoute(route: Route) {
  console.log('navigate to ', route);
}

export default function () {
  doSomethingWithARoute('/app');
}
