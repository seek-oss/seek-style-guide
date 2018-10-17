import { pipe } from 'lodash/fp';

export const buildRoutes = inputRoutes =>
  inputRoutes.reduce((acc, route) => {
    const category = route.category || 'Other';
    const initialArrayVal = acc[category] || [];
    return {
      ...acc,
      [category]: [...initialArrayVal, route]
    };
  }, {});

export const sortRoutes = (routeA, routeB) => {
  if (!routeA.component && routeB.component) {
    return -1;
  }
  if (!routeB.component && routeA.component) {
    return 1;
  }
  if ((routeA.category || 'Other') < (routeB.category || 'Other')) {
    return -1;
  }
  if ((routeA.category || 'Other') > (routeB.category || 'Other')) {
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
    sort(sortRoutes),
    applyHighlighting(highlightedElement),
    buildRoutes,
    Object.entries
  );
