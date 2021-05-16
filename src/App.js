import { useState } from 'react'
import './App.css';
import PrimaryTabs from './components/PrimaryTabs'
import SecondaryTabs from './components/SecondaryTabs'
import Tab from './components/Tab'

function App() {

  const [primarySelected, setPrimarySelected] = useState(0)
  const [secondarySelected, setSecondarySelected] = useState(0)
  const primaryTabs = ['Simple Request', 'Preflight Request', 'Credentialed Request']
  const secondaryTabs = {
    simple: ['Error 1', 'Wildcard Origin', 'Error 2', 'Valid Condition'],
    preflight: ['Error 1', 'Error 2', 'Error 3', 'Valid Condition'],
    credentialed: ['Error 1', 'Error 2', 'Valid Condition']
  }
  const baseURL = 'https://cors-tutorial-server.herokuapp.com/api'

  const simpleData = [
    {
      url: baseURL + '/simple/no-origin'
    },
    {
      url: baseURL + '/simple/wildcard-origin'
    },
    {
      url: baseURL + '/simple/bad-origin'
    },
    {
      url: baseURL + '/simple/good-origin'
    }
  ]

  const preflightData = [
    {
      url: baseURL + '/preflight/bad-origin',
      header: {
        method: 'DELETE'
      }
    },
    {
      url: baseURL + '/preflight/bad-method',
      header: {
        method: 'DELETE'
      }
    },
    {
      url: baseURL + '/preflight/req-bad-origin',
      header: {
        method: 'DELETE'
      }
    },
    {
      url: baseURL + '/preflight/good-origin',
      header: {
        method: 'DELETE'
      }
    }
  ]

  const credentialedData = [
    {
      url: baseURL + '/credentialed/wildcard-origin',
      header: {
        credentials: 'include'
      }
    },
    {
      url: baseURL + '/credentialed/good-origin',
      header: {
        credentials: 'include'
      }
    },
    {
      url: baseURL + '/credentialed/good-request',
      header: {
        credentials: 'include'
      }
    }
  ]

  return (
    <div className="d-flex justify-content-center flex-row mt-4">
      <PrimaryTabs tabs={primaryTabs} selected={primarySelected} setSelected={setPrimarySelected} setSecondarySelected={setSecondarySelected}>
        <SecondaryTabs isSelected={ primarySelected === 0} tabs={secondaryTabs.simple} selected={secondarySelected} setSelected={setSecondarySelected} >
          <Tab/>
        </SecondaryTabs>

        <SecondaryTabs isSelected={ primarySelected === 1} tabs={secondaryTabs.preflight} selected={secondarySelected} setSelected={setSecondarySelected}>
          <Tab/>
        </SecondaryTabs>

        <SecondaryTabs isSelected={ primarySelected === 2} tabs={secondaryTabs.credentialed} selected={secondarySelected} setSelected={setSecondarySelected}>
          <Tab/>
        </SecondaryTabs>
      </PrimaryTabs>
    </div>
  );
}

export default App;
