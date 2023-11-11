
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/pages/Home';
import { Loan, LoanShow, LoanDelete, LoanUpdate, LoanView } from './Components/LS';
import { Vendor, VendorDelete, VendorShow, VendorUpdate, VendorView } from './Components/LS';
import { Document, DocumentDelete, DocumentShow, DocumentUpdate, DocumentView } from './Components/LR' 
import {Application, ApplicationShow, ApplicationUpdate, ApplicationDelete, ApplicationView} from './Components/LR';
import {Guarantor, GuarantorDelete, GuarantorShow, GuarantorUpdate, GuarantorView} from './Components/LR'
import RegisteredUserList from './Components/LR/RegisteredUserList';
import User from './Components/ADMIN/User';
import UpdateUser from './Components/ADMIN/UpdateUser';
import ShowUser from './Components/ADMIN/ShowUser';
import Family from './Components/ADMIN/Family';
import BankInfo from './Components/ADMIN/BankInfo';
import Disburstment from './Components/DISBURTMENT/Disburtment';
import DisburtmentShow from './Components/DISBURTMENT/DisburstmentShow';
import Installment from './Components/INSTALLMENT/Installment';
import InstallmentShow from './Components/INSTALLMENT/InstallmentShow';
import Defualter from './Components/ADMIN/Defualter';
import DefualterShow from './Components/ADMIN/DefualterShow';
import Success from './Components/Success';
import Signin from './Components/pages/Signin';
import NavBarCustomer from './Components/NavBar/NavBarCustomer';
import NavBarAh from './Components/NavBar/NavBarAh';
import NavBarLo from './Components/NavBar/NavBarLo';
import NavBarLr from './Components/NavBar/NavBarLr';
import NavBarOh from './Components/NavBar/NavBarOh';
import NavBarUser from './Components/NavBar/NavBarUser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import authHeader from './Components/HEADERS/authHeader';
import UserShow from './Components/ADMIN/UserShow';
import ShowUserDefualter from './Components/ADMIN/ShowUserDefualter';
import ApplicationShowLoan from './Components/LR/APPLICATION/ApplicationShowLoan';
import ShowDocument from './Components/OH/ShowDocument';


function App() {
 
  const email = JSON.parse(localStorage.getItem("email"));
  const [user, setUser] = useState([]);

    
    const getUser = async () => {
      console.log(email)
      const result = await axios.get(`http://127.0.0.1:8000/fetchrole/${email}/`)
      setUser(result.data)
      console.log(result.data.role)
           
      }
    
    useEffect(()=>{
      getUser();
    },[])


  

  function LoginTrue(){
    
    
      return(
        <div>
          
        <BrowserRouter>
        <NavBarLr/>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/application/:userId' element={<Application />}/>
          <Route path='/applicationshow' element={<ApplicationShow />}/>
          <Route path='/update/application/:userId' element={<ApplicationUpdate />}/>
          <Route path='/view/application/:userId' element={<ApplicationView />}/>
          <Route path='/delete/application/:userId' element={<ApplicationDelete  />}/>
          <Route path='/document/:userId' element={<Document />}/>
          <Route path='/documentshow' element={<DocumentShow />}/>
          <Route path='/view/document/:userId' element={<DocumentView />}/>
          <Route path='/update/document/:userId' element={<DocumentUpdate />}/>
          <Route path='/delete/document/:userId' element={<DocumentDelete />}/>
          <Route path='/guarantor/:userId' element={<Guarantor />}/>
          <Route path='/guarantorshow' element={<GuarantorShow />}/>
          <Route path='/view/guarantor/:userId' element={<GuarantorView />}/>
          <Route path='/update/guarantor/:userId' element={<GuarantorUpdate />}/>
          <Route path='/delete/guarantor/:userId' element={<GuarantorDelete />}/>
          <Route path='/vendor/:userId' element={<Vendor />}/>
          <Route path='/vendorshow' element={<VendorShow />}/>
          <Route path='/view/vendor/:userId' element={<VendorView />}/>
          <Route path='/update/vendor/:userId' element={<VendorUpdate />}/>
          <Route path='/delete/vendor/:userId' element={<VendorDelete />}/>
          <Route path='/showuser' element={<ShowUser />} />
          <Route path='/UpdateUser/:userId' element={<UpdateUser />} />
          <Route path='/' element={<Home />}/>
        </Routes>
        </BrowserRouter>
      </div>
  
      )
    
    
  }

  function LoginFalse(){
   
    return (
      <div>
      <BrowserRouter>
      <NavBarUser/>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/user' element={<User />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
    )
    

  }

  

  const [loggedin, setLogin] = useState(false);

  const isLoggedin = () => {
    const auth = authHeader();
    console.log(auth)
    if (Object.keys(auth).length === 0) {
      setLogin(false)
    }else {
      setLogin(true)
    }
  }
  useEffect(()=>{
    isLoggedin()
  })


  if (loggedin) {
  
    console.log(loggedin)
    
    if(user.role==='LR'){
      return (
        LoginTrue()
    )
    }
    else if(user.role === 'CS'){
      return(
        <BrowserRouter>
      <NavBarCustomer />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/usershow' element={<UserShow />} />
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
      )
    }
    else if(user.role === 'OH'){
      return(
        <BrowserRouter>
      <NavBarOh />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/checkdocument' element={<ShowDocument />} />
        <Route path='/adddefualter' element={<ShowUserDefualter />} />
        <Route path='/defualter/:userId' element={<Defualter />} />
        <Route path='/defualtershow' element={<DefualterShow />} />
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
      )
    }
    else if(user.role === 'LO'){
      return(
        <BrowserRouter>
      <NavBarLo />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/applicationshowLoan' element={<ApplicationShowLoan />}/>
        <Route path='/loan/:userId' element={<Loan />}/>
        <Route path='/loanshow' element={<LoanShow />}/>
        <Route path='/view/loan/:userId' element={<LoanView />}/>
        <Route path='/update/loan/:userId' element={<LoanUpdate />}/>
        <Route path='/delete/loan/:userId' element={<LoanDelete />}/>
        <Route path='/disburstment/:userId' element={<Disburstment />} />
        <Route path='/disburstmentshow' element={<DisburtmentShow />} />
        <Route path='installment/:userId' element={<Installment />} />
        <Route path='installmentshow' element={<InstallmentShow />} />
        <Route path='/success' element={<Success />} />
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
      )
    }
    else if(user.role === 'AH'){
      return(
        <BrowserRouter>
      <NavBarAh />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
      )
    }
    else {
      return(
        LoginFalse()
      )
    }
    }
     


  else {
    return(LoginFalse())
  }
}

export default App;