// Readmore
// https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

import { useEffect } from 'preact/hooks'

const useKeyboardNavigation = () => {
  useEffect(() => {
    const keyboardNavigation = (e) => {
      if (e.type === 'keydown' && e.key === 'Tab') {
        document.body.classList.add(keyboardFocusedClassName)
      }

      if (e.type === 'mousedown') {
        document.body.classList.remove(keyboardFocusedClassName)
      }
    }
    document.addEventListener('keydown', handleOutlineStyles)
    document.addEventListener('mousedown', handleOutlineStyles)

    return () => {
      document.body.classList.remove(keyboardFocusedClassName)
      document.removeEventListener('keydown', handleOutlineStyles)
      document.removeEventListener('mousedown', handleOutlineStyles)
    }
  }, [])
}

export default useKeyboardNavigation
