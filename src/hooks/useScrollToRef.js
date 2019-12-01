import { useRef } from 'react';

const useScrollToRef = newRef => {
  const ref = useRef(null); // default ref

  // scroll to newRef if given, or else use default ref
  const scrollToRef = () =>
    window.scrollTo(
      0,
      newRef ? newRef.current.offsetTop : ref.current.offsetTop
    );

  return { ref, scrollToRef };
};

export default useScrollToRef;
