import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import './Home.css'
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/Footer/Footer';
import PropartyList from '../../components/PropartyList/PropartyList';
const Home = () => {
    return (
        <div>
        <Navbar />
         <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropartyList/>
          <h1 className="homeTitle">Homes guests love</h1>
          {/* <FeaturedProperties/> */}
          {/* <MailList/>  */}
          <Footer/>  
        </div> 
      </div>
    );
};

export default Home;