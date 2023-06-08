import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div>
        <Navbar />
         <Header/>
        {/* <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/> 
        </div> */}
      </div>
    );
};

export default Home;