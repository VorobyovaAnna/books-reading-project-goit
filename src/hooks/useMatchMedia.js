import { useState, useLayoutEffect } from 'react';
import device from 'styles/device';

const queries = [
  `${device.mobile} and (max-width: 767px)`,
  `${device.tablet} and (max-width: 1279px)`,
  `${device.desktop}`,
];

const useMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  });

  const typesOfScreen = ['isMobile', 'isTablet', 'isDesktop'];

  return typesOfScreen.reduce(
    (acc, screen, idx) => ({
      ...acc,
      [screen]: values[idx],
    }),
    {}
  );
};

export default useMatchMedia;

// приклад використання
// ---------- 1 - імортуємо хук
// import useMatchMedia from 'hooks/useMatchMedia';
// ---------- 2 - забираєм необхідне значення isMobile, isTablet або іsDesktop,
// ---------- який видає тру або фолс в залежності від ширини екрану
// const { isMobile } = useMatchMedia();
