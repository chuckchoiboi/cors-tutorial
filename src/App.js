import './App.css';

// components
import PrimaryTabs from './components/PrimaryTabs'

function App() {

  const tabs = ['Simple Request', 'Preflight Request', 'Credential Request']

  return (
    <div className="d-flex justify-content-center flex-row mt-4">
      <PrimaryTabs tabs={tabs} />
    </div>
  );
}

export default App;
