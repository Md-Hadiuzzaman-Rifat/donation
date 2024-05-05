import "./App.css";
import Loan from "./components/Loan/Loan";
import CrowdSourcing from "./components/CrowdSourcing/CrowdSourcing";
import LoanForm from "./components/LoanForm/LoanForm";
import Review from "./components/Review/Review";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import OfferLoan from "./components/OfferLoan/OfferLoan";
import SignUp from "./components/SignUp/SignUp";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Profile/Profile";
import Response from "./components/Response/Response";
import ApplyFor from "./components/ApplyFor/ApplyFor";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateSingleRoute from "./components/PrivateRoute/PrivateSingleRoute";
import About from "./components/About/About";
import MainHeader from "./components/MainHeader/MainHeader";
import Transaction from "./components/Transaction/Transaction";
import Conform from "./components/Conform/Conform";
import RateUser from "./components/RateUser/RateUser";
import ContractPage from "./components/ContractPage/ContractPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/loan" element={<Loan></Loan>}></Route>
          <Route path="/crowdsourcing" element={<CrowdSourcing />}></Route>
          {/* // private route  */}
          <Route path="/loanform" element={<PrivateSingleRoute><LoanForm></LoanForm></PrivateSingleRoute>}></Route>
          <Route path="/offerLoan/:id" element={<PrivateSingleRoute><OfferLoan/></PrivateSingleRoute>}></Route>
          <Route path="/rate/:id" element={<RateUser/>}></Route>
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<SignUp></SignUp>}></Route>
  
          {/* // private route  */}
          <Route path="/profile/*" element={<PrivateRoute />}>
            <Route path="applyFor/response/:id" element={<Response></Response>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="applyFor" element={<ApplyFor></ApplyFor>}></Route>
            <Route path='transaction' element={<Transaction/>}></Route>
            <Route path='conform' element={<Conform/>}></Route>
            <Route path='contract' element={<ContractPage/>}></Route>
          </Route>
          {/* <Toast></Toast> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
