import React from 'react';
import Navbar from './Nav';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import Footer from './Footer';
function App() {
  
  return (
    <div className="container-fluid">
       <div className=" nav">
 <Navbar/>
    </div>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<ScrollTranslate/>}></Route>
        <Route path='/whyshop' element={<WhyShopSection/>}></Route>
        <Route path="/Howitworks" element={<HowItWorks/>}></Route>
        <Route path='/DailyDraw' element={<DailyLuckyDraw/>}></Route> */}
      </Routes>
      </BrowserRouter>
    {/* <ScrollTranslate/> */}
      {/* <WhyShopSection/>
        <WhyVendorsSection/>
        <HowItWorks/>
        <DailyLuckyDraw/>
        <ClosingCTABanner/> */}
         
    </div>
  );
}

export default App;
