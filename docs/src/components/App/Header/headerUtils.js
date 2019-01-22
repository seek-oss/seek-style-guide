import { pipe } from 'lodash/fp';

const OTHER_CATEGORY = 'Other';

export const buildRoutes = inputRoutes =>
  inputRoutes.reduce((acc, route) => {
    const category = route.category || OTHER_CATEGORY;
    const initialArrayVal = acc[category] || [];
    return {
      ...acc,
      [category]: [...initialArrayVal, route]
    };
  }, {});

export const compareRoutes = (routeA, routeB) => {
  const routeACategory = routeA.category || OTHER_CATEGORY;
  const routeBCategory = routeB.category || OTHER_CATEGORY;
  if (!routeA.component && routeB.component) {
    return -1;
  }
  if (!routeB.component && routeA.component) {
    return 1;
  }
  if (routeACategory < routeBCategory) {
    return -1;
  }
  if (routeACategory > routeBCategory) {
    return 1;
  }
  if (routeA.title < routeB.title) {
    return -1;
  }

  return 1;
};

export const applyHighlighting = highlightedElement => routeList => {
  return routeList.map((route, index) => ({
    ...route,
    highlighted: index === highlightedElement
  }));
};

const sort = fn => arr => arr.sort(fn);

export const generateRouteList = highlightedElement =>
  pipe(
    sort(compareRoutes),
    applyHighlighting(highlightedElement),
    buildRoutes,
    Object.entries
  );
