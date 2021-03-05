import { h } from 'preact'
import userPreferencesContext from '@components/hooks/UserPreferencesContext'

const AnnouncementBar = () => {
  const {
    isAnnouncementBarClosed,
    closeAnnouncementBar,
  } = userPreferencesContext()

  return <h1>AnnouncementBar</h1>
}

export default AnnouncementBar
