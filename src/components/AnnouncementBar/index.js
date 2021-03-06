import { h } from 'preact'
import userPreferencesContext from '@components/hooks/UserPreferencesContext'

const AnnouncementBar = () => {
  const {
    isAnnouncementBarClosed,
    closeAnnouncementBar,
  } = userPreferencesContext()

  if (!announcementBar) {
  return null
  }
  
  const { content, backgroundColor, textColor, isCloseable } = announcementBar
  if (!content || (isCloseable && isAnnouncementBarClosed)) {
   return null
  }

  return <h1>AnnouncementBar</h1>
}

export default AnnouncementBar
