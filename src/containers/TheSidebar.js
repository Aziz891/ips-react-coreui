import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
     show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >

     {/*-----------------------------------------------------------------*/}

      <CSidebarBrand className="d-md-down-none" to="/project_info">
        <CIcon
          className="c-sidebar-brand-full"
          img src="/images/relaypioneers-w.png"
          //src="https://www.se.com.sa/style%20library/sec/Images/Logo_EN.png"
          height={50}
         />

        <CIcon
          className="c-sidebar-brand-minimized"
          img src="/images/rp-w.png"
          //name="sygnet"
          height={50}
         />

       </CSidebarBrand>

      {/*-----------------------------------------------------------------*/}

      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
           }}
         />
        </CSidebarNav>

      {/*-----------------------------------------------------------------*/}

      <CSidebarMinimizer className="c-d-md-down-none"/>

      {/*-----------------------------------------------------------------*/}

  </CSidebar>
  )

}

export default React.memo(TheSidebar)
