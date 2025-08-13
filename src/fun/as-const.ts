const routes = {
  home: '/',
  app: '/app',
  user: '/app/user',
} as const;

type Routes = typeof routes;
type Route = Routes[keyof Routes];

function doSomethingWithARoute(route: Route) {
  console.log('navigate to ', route);
}

export default function () {
  doSomethingWithARoute('/app');

  // ❌ Argument of type '"foobar"' is not assignable to parameter of type 'Route'.
  // doSomethingWithARoute('foobar')
}
