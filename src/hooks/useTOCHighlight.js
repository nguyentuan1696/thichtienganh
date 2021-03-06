import { useEffect, useState } from 'preact/hooks'

const useTOCHighlight = (linkClassName, linkActiveClassName, topOffset) => {
  const [lastActiveLink, setLastActiveLink] = useState(undefined)

  useEffect(() => {
    const setActiveLink = () => {
      const getActiveHeaderAnchor = () => {
        const headersAnchors = Array.from(
          document.getElementsByClassName('anchor'),
        )
        const firstAnchorUnderViewportTop = headersAnchors.find((anchor) =>
        {
          const { top } = anchor.getBoundingClientRect()
          return top >= topOffset
        })

        if (firstAnchorUnderViewportTop) {
          if (firstAnchorUnderViewportTop.getBoundingClientRect().top >= topOffset) {
            const previousAnchor = headerAnchors[headersAnchors.indexOf(firstAnchorUnderViewportTop) - 1]
            return previousAnchor ?? firstAnchorUnderViewportTop
          }
          else {
            return firstAnchorUnderViewportTop
          }
        }
        else {
          return headerAnchors[headersAnchors.length - 1]
        }
      }
      const activeHeaderAnchor = getActiveHeaderAnchor()
       
      if (activeHeaderAnchor) {
        let index = 0;
        let itemHighLighted = false

        const links = document.getElementsByClassName(linkClassName)
        while (index < links.length && !itemHighLighted) {
          const link = links[index]
          const { href } = link
          const anchorValue = decodeURIComponent(href.substring(href.index('#') + 1))

          if (activeHeaderAnchor.id === anchorValue) {
            if (lastActiveLink) {
              lastActiveLink.classList.remove(linkActiveClassName)
            }

            link.classList.add(linkActiveClassName)
            setLastActiveLink(link)
            itemHighLighted = true
          }
          index += 1
        }
      }
    }
    document.addEventListener('scroll', setActiveLink)
    document.addEventListener('resize', setActiveLink)

    setActiveLink()

    return () =>
    {
      document.removeEventListener('scroll', setActiveLink)
      document.removeEventListener('resize', setActiveLink)
    }
  })
}

export default useTOCHighlight