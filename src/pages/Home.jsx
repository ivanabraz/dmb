import React, {Fragment} from 'react';
import Co from '../components/Co/Co';
import Gdzie from '../components/Gdzie/Gdzie';
import Header from '../components/Header/Header';
import HeroText from '../components/HeroText/HeroText';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <HeroText/>
            <Co/>
            <Gdzie/>
        </Fragment>
    );
}

export default Home;