import {useEffect, useState} from 'react'

export const useFetch = (url) => {
  // combine with useState to store some information
  const [state, setState] = useState({data: null, loading: true})
  // whenever the url changes we want to re-fetch data
  useEffect(() => {
    setState(state => ({data: state.data, loading: true}))
    // esLint doesn't like async/await here
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setState({data: y, loading: false})
      })
  }, [url, setState]);

  return state
}