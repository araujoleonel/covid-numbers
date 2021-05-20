import './App.css';
import Navigation from './components/Navigation/Navigation';
import DailyReport from './components/DailyReport/DailyReport';
import Consolidated from './components/Consolidated/Consolidated';

function App() {
  return (
    <div id="contenedorApp">
      <Navigation />
      <DailyReport />
      <Consolidated />
    </div>
  );
}

export default App;