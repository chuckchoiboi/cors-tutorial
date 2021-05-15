import { useState } from 'react'
import './App.css';
import PrimaryTabs from './components/PrimaryTabs'
import SecondaryTabs from './components/SecondaryTabs'

function App() {

  const [primarySelected, setPrimarySelected] = useState('Simple Request')
  const [secondarySelected, setSecondarySelected] = useState('server with no origin')
  const primaryTabs = ['Simple Request', 'Preflight Request', 'Credentialed Request']
  const secondaryTabs = {
    simple: ['server with no origin', 'server with wildcard origin', 'unmatching origin', 'matching origin'],
    preflight: ['server with no origin', 'server with wildcard origin', 'unmatching origin', 'matching origin'],
    credentialed: ['server with no origin', 'server with wildcard origin', 'unmatching origin', 'matching origin']
  }

  return (
    <div className="d-flex justify-content-center flex-row mt-4">
      <PrimaryTabs tabs={primaryTabs} selected={primarySelected} setSelected={setPrimarySelected}>
        <SecondaryTabs isSelected={ primarySelected === 'Simple Request'} tabs={secondaryTabs.simple} selected={secondarySelected} setSelected={setSecondarySelected} >
          Hello1
        </SecondaryTabs>

        <SecondaryTabs isSelected={ primarySelected === 'Preflight Request'} tabs={secondaryTabs.preflight} selected={secondarySelected} setSelected={setSecondarySelected}>
          Hello2
        </SecondaryTabs>

        <SecondaryTabs isSelected={ primarySelected === 'Credentialed Request'} tabs={secondaryTabs.credentialed} selected={secondarySelected} setSelected={setSecondarySelected}>
          Hello3
        </SecondaryTabs>
      </PrimaryTabs>
    </div>
  );
}

export default App;
