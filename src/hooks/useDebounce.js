import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [result, setResult] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setResult(value), delay);

    return () => clearTimeout(handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return [result];
}

export default useDebounce;
