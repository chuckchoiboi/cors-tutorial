import { useState } from 'react'
import './App.css';
import PrimaryTabs from './components/PrimaryTabs'
import SecondaryTabs from './components/SecondaryTabs'

function App() {

  const [primarySelected, setPrimarySelected] = useState(0)
  const [secondarySelected, setSecondarySelected] = useState(0)
  const primaryTabs = ['Simple Request', 'Preflight Request', 'Credentialed Request']
  const secondaryTabs = {
    simple: ['Error 1', 'Wildcard Origin', 'Error 2', 'Valid Condition'],
    preflight: ['Error 1', 'Error 2', 'Error 3', 'Valid Condition'],
    credentialed: ['Error 1', 'Error 2', 'Valid Condition']
  }

  return (
    <div className="d-flex justify-content-center flex-row mt-4">
      <PrimaryTabs tabs={primaryTabs} selected={primarySelected} setSelected={setPrimarySelected} setSecondarySelected={setSecondarySelected}>
        <SecondaryTabs isSelected={ primarySelected === 0} tabs={secondaryTabs.simple} selected={secondarySelected} setSelected={setSecondarySelected} >
          Hello1
        </SecondaryTabs>

        <SecondaryTabs isSelected={ primarySelected === 1} tabs={secondaryTabs.preflight} selected={secondarySelected} setSelected={setSecondarySelected}>
          Hello2
        </SecondaryTabs>

        <SecondaryTabs isSelected={ primarySelected === 2} tabs={secondaryTabs.credentialed} selected={secondarySelected} setSelected={setSecondarySelected}>
          Hello3
        </SecondaryTabs>
      </PrimaryTabs>
    </div>
  );
}

export default App;
