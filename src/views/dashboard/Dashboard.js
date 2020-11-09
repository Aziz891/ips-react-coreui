import React, { lazy } from 'react'
import {
  CCardGroup,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle
} from '@coreui/react'

import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'

import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  return (
<>

    {<CCardGroup columns className = "cols-2" >

     {
      <CCard>

        <CCardHeader>
         <CRow>
         <CCol>
         <h2>Collected Data</h2>
         </CCol>

         <CCol>
         <CButton to="/collected_data" variant="outline" color="dark" className="float-right">
            more
         </CButton>
         </CCol>
         </CRow>
        </CCardHeader>

        <CCardBody>
          <CChartBar
            type="bar"
            datasets={[
              {
                label: 'Number of Relays',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />

        </CCardBody>

        <CCardFooter>
        </CCardFooter>

      </CCard>
      }


      {
      <CCard>

        <CCardHeader>
         <CRow>
         <CCol>
         <h2>Manufacturers</h2>
         </CCol>

         <CCol>
         <CButton to="/collected_data" variant="outline" color="dark" className="float-right">
            more
         </CButton>
         </CCol>
         </CRow>
        </CCardHeader>

        <CCardBody>
          <CChartDoughnut
                    type="doughnut"
                    datasets={[
                      {
                        backgroundColor: [
                          '#41B883',
                          '#DD1B16',
                          '#00D8FF',
                          '#ffd700',
                          '#737ca1',
                          '#ca226b'
                        ],
                        data: [55, 15, 25, 5, 10, 30]
                      }
                    ]}
                    labels={['SEL', 'Siemens', 'ABB', 'Schneider', 'GE', 'ZIV']}
                    options={{
                      tooltips: {
                        enabled: true
                      }
                    }}
                  />
        </CCardBody>

        <CCardFooter>
        </CCardFooter>

      </CCard>
      }

    </CCardGroup>
  }

     {
      <CCard>

        <CCardHeader>
         <CRow>
         <CCol>
         <h2>Alarms</h2>
         </CCol>

         <CCol>
         <CButton  to="/alarms" variant="outline" color="dark"  className="float-right">
            more
         </CButton>
         </CCol>
         </CRow>
        </CCardHeader>

        <CCardBody>
            <WidgetsDropdown />
        </CCardBody>

      </CCard>
      }



</>
  )
}

export default Dashboard
