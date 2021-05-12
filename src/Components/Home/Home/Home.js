import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import TopBar from '../../Shared/TopBar/TopBar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <TopBanner></TopBanner>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;