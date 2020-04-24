import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Exercise from './Exercise';
import Exercises from './Exercises';
import Home from './Home';

import systemsList from '../data/systems';
import selectSystem from '../data/select-system';

const customHistory = createBrowserHistory({ basename: process.env.PUBLIC_URL });

customHistory.listen(_ => {
    window.scrollTo(0, 0);
});

const GlobalStyle = createGlobalStyle`
    * {
        cursor: default;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        color: white;
    }

    body, #root {
        margin: 0;
        padding: 0;
        background-color: #1A1423;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2.1rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h1 > a, h1 > a:visited, h1 > a:active, h1 > a:hover,
    h2 > a, h2 > a:visited, h2 > a:active, h2 > a:hover {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

    .link, .link:visited, .link:active, .link:hover {
        text-decoration: none;
        border-radius: 0.5rem;
        border: 1px solid white;
        box-sizing: border-box;
        background-color: #3D314A;
        color: white;
        padding: 0.5rem;
        font-size: 1.25rem;
        cursor: pointer;
    }

    .link:hover, .link:active {
        border: 3px solid white;
    }

    .link:active {
        background-color: white;
        color: #3D314A;
    }

    .title, h2, h3, h4 {
        margin: 0.5rem 0 0 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        box-sizing: border-box;
    }

    #root > * {
        width: 100%;
    }

    #root > * + *, .listBox > * + * {
        margin-top: 0.75rem;
    }

    @media only screen and (min-width: 640px) {
        #root {
            padding: 0;
        }

        #root > * {
            width: 620px;
        }
    }
`;

export default function Layout() {
    const systemsArr = systemsList.systems;

    const systemRoutes = systemsArr.map((name) => {
        return (
            <Route
                exact path={name[1]}
                key={name[1]}
                render={routeProps => <Exercises {...routeProps} system={name[0]} />}
            />
        );
    });

    const systemExercises = systemsArr.map((name) => {
        let activeSystem = selectSystem(name[0]);

        return (
            activeSystem.map((exercises) => {
                return (
                    <Route
                        exact path={`${name[1]}${exercises.URL}`}
                        key={`${name[1]}${exercises.URL}`}
                        render={routeProps => <Exercise {...routeProps} systemName={name[0]} systemURL={name[1]} exerciseName={exercises.Name} />}
                    />
                );
            })
        );
    });

    return (
        <Router history={customHistory}>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                {systemRoutes}
                {systemExercises}
                <Route render={() => <h2>404 Page Not Found</h2>} />
            </Switch>
            <Footer />
            <GlobalStyle />
        </Router>
    );
}