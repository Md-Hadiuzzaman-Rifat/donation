import "./App.css";
import Loan from "./components/Loan/Loan";
import CrowdSourcing from "./components/CrowdSourcing/CrowdSourcing";
import LoanForm from "./components/LoanForm/LoanForm";
import Toast from "./components/Toast/Toast";
import Review from "./components/Review/Review";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OfferLoan from "./components/OfferLoan/OfferLoan";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/loan" element={<Loan></Loan>}></Route>
        <Route path="/crowdsourcing" element={<CrowdSourcing />}></Route>
        <Route path="/loanform" element={<LoanForm />}></Route>
        <Route path="/offerLoan" element={<OfferLoan />}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/login" element={<Review></Review>}></Route>
        <Route path="/register" element={<Review></Review>}></Route>
        {/* <Toast></Toast> */}
      </Routes>
    </div>
  );
}

export default App;
