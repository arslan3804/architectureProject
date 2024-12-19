import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import NewspaperComponent from './components/NewspaperComponent'
import AddNewspaperComponent from './components/AddNewspaperComponent'
import AddSubscriptionComponent from './components/AddSubscriptionComponent'
import RegistrationComponent from './components/RegistrationComponent';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginComponent from './components/LoginComponent'
import SubscriptionComponent from './components/SubscriptionsComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>

          {/* http://localhost:3000 */}
          <Route path='/' element = { <NewspaperComponent /> }></Route>

          {/* http://localhost:3000/news */}
          <Route path='/news' element = { <AddNewspaperComponent /> }></Route>
          
          {/* http://localhost:3000/register */}
          <Route path="/register" element={<RegistrationComponent />} />

          {/* http://localhost:3000/login */}
          <Route path="/login" element={<LoginComponent />} />

          {/* http://localhost:3000/subscriptions */}
          <Route path="/subscriptions" element={<SubscriptionComponent />} />

          {/* http://localhost:3000/addSubscription */}
          <Route path="/addSubscription" element={<AddSubscriptionComponent />} />

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
