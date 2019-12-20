import { useState, useEffect } from 'react';
import useThrottle from './useThrottle';

export const useScrollToTop = (offset = 300) => {
  const [mayScroll, setMayScroll] = useState(false);

  // method that scroll to top of the page
  const scrollToTop = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (e) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // set state to whether we can scroll depending on page y offset
  const onScroll = e => {
    if (window.pageYOffset > offset) {
      setMayScroll(true);
    } else {
      setMayScroll(false);
    }
  };

  const [throttledScroll] = useThrottle(onScroll);

  useEffect(() => {
    document.addEventListener('scroll', throttledScroll);
    return () => document.removeEventListener('scroll', throttledScroll);
  }, [offset, throttledScroll]);

  return { mayScroll, scrollToTop };
};

export default useScrollToTop;
