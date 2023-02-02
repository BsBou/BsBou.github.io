import { useState, useEffect } from 'react'

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [query])

  return matches
}

export default useMediaQuery
