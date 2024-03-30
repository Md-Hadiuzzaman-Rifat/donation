import './App.css';
import Loan from './components/Loan/Loan';
import CrowdSourcing from './components/CrowdSourcing/CrowdSourcing';
import LoanForm from './components/LoanForm/LoanForm';
import Toast from './components/Toast/Toast';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      {/* <div>
        Hello World
      </div> */}
      <Loan></Loan>
      <CrowdSourcing></CrowdSourcing>
      <LoanForm></LoanForm>
      <Toast></Toast>
      <Review></Review>
    </div>
  );
}

export default App;
