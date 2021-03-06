import { h } from 'preact'
import { AnnouncementBar, Navbar, Footer, LayoutProviders, LayoutHead } from '@components'
import useKeyboardNavigation from '../../hooks/useKeyboardNavigation'


const Layout = (props) =>
{
  const [children, noFooter, wrapperClassName] = props

  useKeyboardNavigation()

  return (
    <h1>layout</h1>
  )
}

export default Layout