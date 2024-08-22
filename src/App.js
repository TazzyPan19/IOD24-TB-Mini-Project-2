import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { NavBarComp } from './components/NavBarComp';
import { WelcomePage } from './components/WelcomePage';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { Fallback } from './components/Fallback'; 
import { Account } from './components/Account';
import { ContactForm } from './components/ContactForm';
import { RecipeViewer } from './components/RecipeViewer';
import { FaqPage }  from './components/Faq';
import { Accreditation }  from './components/Accreditation';
import { FooterComp } from './components/FooterComp';
import { UserProvider } from './stores/useContext';
 
const App = () => {
  // NOTE VARIABLES AND STATES

  // NOTE FUNCTIONS

  // NOTE RETURNS
  return (
    <div className='App'>
      <UserProvider>
        <NavBarComp />
        <Routes>
          <Route exact path='/' index element={<WelcomePage />} />
          <Route path='signup' element={<SignupForm />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='account' element={<Account />} />
          <Route path='recipes/:id' element={<RecipeViewer />} />
          <Route path='contact' element={<ContactForm />} />
          <Route path='accreditation' element={<Accreditation />} />
          <Route path='faq' element={<FaqPage />} />

          <Route path='*' element={<Fallback />} />
        </Routes>
        <FooterComp />
      </UserProvider>
    </div>
  ) 
}

export default App;