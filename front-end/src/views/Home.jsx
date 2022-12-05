import React from 'react';
import CrewList from '../components/CrewList';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';

const Home = () => {

    return (
        <div>
            <Header />
            <Form />
            <CrewList />
            <Footer />
        </div>
    );
};

export default Home;