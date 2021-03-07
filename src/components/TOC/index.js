import { h } from 'preact'
import { useTOCHighlight } from '../../hooks'

const LINK_CLASS_NAME = 'table-of-contents__link'
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active'
const TOP_OFFSET = 100

const Headings = ({ toc, isChild }) => {
  if (!toc.length) {
    return null
  }

  return (
    <>
      <ul
        className={
          isChild ? '' : 'table-of-contents table-of-contents__left-border'
        }>
        {toc.map((heading) => {
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={LINK_CLASS_NAME}
                dangerouslySetInnerHTML={{ __html: heading.value }}
              />
              <Headings  isChild toc={heading.children} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

const TOC = ({ toc }) =>
{
  useTOCHighlight = (LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET)
  return (
    <div>
      <Headings toc={toc} />
    </div>
  )
}

export default TOC
