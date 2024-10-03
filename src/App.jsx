import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import LoginPage from './Pages/LoginPage';
import NewDrop from './API/NewDrop';
import Trending from './API/Trending';
import ViewAll from './API/ViewAll';
import Cart from './Pages/CartPage';
import LikePage from './Pages/LikePage';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext'; // Import SearchProvider
import SearchPage from './Pages/SearchPage';
import SignUpPage from './Pages/SignUpPage';
import { LikeContext, LikeProvider } from './context/LikeContext';


// Dummy components for demonstration
// Replace these with your actual component imports
import NewArrival from './Pages/NewArrivalPage';
import BestSelling from './Pages/BestSellingPage';
import GlitchSpecial from './Pages/GlitchSpecialPage';
import GlitchPlus from './Pages/GlitchPlusPage';
import Shop from './Pages/ShopPage';
import TrackOrder from './Pages/TrackOrderPage';
import Return from './Pages/ReturnPage';
import Exchange from './Pages/ExchangePage';
import AffiliateProgram from './Pages/AffiliateProgram';
import CustomerSupport from './Pages/CustomerSupportPage';
import Revolve from './Pages/RevolvePage';
import Suggestions from './Pages/SuggestionsPage';

const App = () => (
  <CartProvider>
    <LikeProvider>
    <SearchProvider> {/* Use SearchProvider here */}
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categories/new-arrival" element={<NewArrival />} />
          <Route path="/categories/best-selling" element={<BestSelling />} />
          <Route path="/categories/glitch-special" element={<GlitchSpecial />} />
          <Route path="/new-drop" element={<NewDrop />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/View-all" element={<ViewAll />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Like" element={<LikePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/categories/glitch-plus" element={<GlitchPlus />} />
          <Route path="/categories/shop" element={<Shop />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/return" element={<Return />} />
          <Route path="/SignUp" element={<SignUpPage/>}/>
          <Route path="/exchange" element={<Exchange />} />
          
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/revolve" element={<Revolve />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </Router>
    </SearchProvider>
    </LikeProvider>
  </CartProvider>
);

export default App;




