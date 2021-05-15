import { useState } from 'react'
import './App.css';
import PrimaryTabs from './components/PrimaryTabs'

function App() {

  const [primarySelected, setPrimarySelected] = useState('Simple Request')
  const primaryTabs = ['Simple Request', 'Preflight Request', 'Credential Request']

  return (
    <div className="d-flex justify-content-center flex-row mt-4">
      <PrimaryTabs tabs={primaryTabs} selected={primarySelected} setSelected={setPrimarySelected}/>
    </div>
  );
}

export default App;
