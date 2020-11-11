import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CButton,
  CBreadcrumbRouter,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)
  const [logout, setLogout] = useState(false)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }


  return (

    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">

        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard"> <b>Dashboard</b> </CHeaderNavLink>
        </CHeaderNavItem>

        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/collected_data"> <b>Collected Data</b> </CHeaderNavLink>
        </CHeaderNavItem>

        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/setting"> <b>Settings Analyzer</b></CHeaderNavLink>
        </CHeaderNavItem>

      </CHeaderNav>


      <CHeaderNav className="px-3">

            <CButton color="danger" onClick={() => setLogout(!logout)} className="mr-1">Logout</CButton>

            <CModal
              show={logout}
              onClose={() => setLogout(!logout)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle> Alert</CModalTitle>
                <CIcon width={24} name="cil-bell"/>
              </CModalHeader>
              <CModalBody>
              <br/>
                <h3>Are you sure you want to logout?</h3>
              <br/>
              </CModalBody>
              <CModalFooter>
                <CButton to="/project_info" color="danger" onClick={() => setLogout(!logout)}>Yes</CButton>{''}
                <CButton color="secondary" onClick={() => setLogout(!logout)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

       </CHeaderNav>

      <CHeaderNav className="px-3">
        <CIcon
          className="c-sidebar-brand-full"
          img src="/images/IEI.png"
          //src="https://www.se.com.sa/style%20library/sec/Images/Logo_EN.png"
          height={50}
         />
      </CHeaderNav>
    </CHeader>
  )
}
export default TheHeader
