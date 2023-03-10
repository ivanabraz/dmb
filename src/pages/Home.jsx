import React, {Fragment} from 'react';
import Co from '../components/Co/Co';
import Gdzie from '../components/Gdzie/Gdzie';
import Haslo from '../components/Haslo/Haslo';
import Header from '../components/Header/Header';
import HeroText from '../components/HeroText/HeroText';
import Kiedy from '../components/Kiedy/Kiedy';
import Program from '../components/Program/Program';
import Spiewnik from '../components/Spiewnik/Spiewnik';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <HeroText title="Dzień Myśli Braterskiej 2023" backgroundColor="bg-pink-2"/>
            <Co/>
            <Haslo/>
            <Gdzie/>
            <Kiedy/>
            <Program/>
            <Spiewnik/>
            <HeroText title="Związek Harcerstwa Polskiego w Argentynie" backgroundColor="bg-green-2"/>
        </Fragment>
    );
}

export default Home;