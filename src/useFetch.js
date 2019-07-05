import { useEffect, useRef, useState } from "react";

export const useFetch = url => {
  // prevent error/warning by storing whether mounted or not in a ref
  const isCurrent = useRef(true);
  // combine with useState to store some information
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // clean-up function called when component unmounts
      isCurrent.current = false;
    };
  }, []);

  // whenever the url changes we want to re-fetch data
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    // esLint doesn't like async/await here
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: y, loading: false });
          }
        }, 2000);
      });
  }, [url, setState]);

  return state;
};
