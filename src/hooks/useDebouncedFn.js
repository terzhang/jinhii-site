import { useEffect, useRef, useCallback } from 'react';

/* Debounce any fast changing value.
The debounced value will only reflect the latest value when ...
... the useDebounce hook has not been called for the specified time period.
When used in conjunction with useEffect, you can ensure that expensive operations like...
... API calls are not executed too frequently.  */
function useDebouncedFn(fn, ms = 300) {
  const savedFn = useRef();
  const handler = useRef();
  const argsRef = useRef();

  // method that clears timer if timer is running
  function cleanup() {
    if (handler.current) {
      clearTimeout(handler.current);
    }
  }

  // every Fn change, savedFn gets updated
  useEffect(() => {
    savedFn.current = fn;
    return () => cleanup();
  }, [fn]);

  // each timer debouncedFn is called, timer gets reset
  const debouncedFn = useCallback(
    (...args) => {
      argsRef.current = args;
      cleanup();
      // every timer cycle, savedFn gets called
      function call() {
        savedFn.current(...argsRef.current);
      }
      handler.current = setTimeout(call, ms);
    },
    [ms]
  );

  // every Fn change, timer gets reset
  useEffect(() => cleanup());

  // return a function that gets called with given args
  return debouncedFn;
}

export default useDebouncedFn;
