import { useState, useLayoutEffect } from 'react';

export const useMatchMedia = (mediaQueries) => {
  const queries = Object.values(mediaQueries).map((query) => matchMedia(query));

  const [values, setValues] = useState(() => {
    const valuesObject = Object.keys(mediaQueries).reduce((acc, key, index) => {
      acc[key] = queries[index].matches;
      return acc;
    }, {});

    if (Object.values(valuesObject).every((val) => val === false)) {
      valuesObject.mobile = true;
    }

    return valuesObject;
  });

  useLayoutEffect(() => {
    const updateValues = () => {
      const valuesObject = Object.keys(mediaQueries).reduce(
        (acc, key, index) => {
          acc[key] = queries[index].matches;
          return acc;
        },
        {}
      );

      if (Object.values(valuesObject).every((val) => val === false)) {
        valuesObject.mobile = true;
      }

      setValues(valuesObject);
    };

    queries.forEach((query) => query.addEventListener("change", updateValues));
    return () =>
      queries.forEach((query) =>
        query.removeEventListener("change", updateValues)
      );
  }, [queries, mediaQueries]);

  return values;
};
