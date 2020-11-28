import { useRef, useEffect } from 'react';

export const useIsMounted = () => {
  const _isMounted = useRef(null);
  useEffect(() => {
    _isMounted.current = true;
    return () => (_isMounted.current = false);
  });
  return _isMounted;
};
