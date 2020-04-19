import React, { useState } from 'react';

import { Switch, Redirect, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Exercise from './Exercise';
import Exercises from './Exercises';
import Home from './Home';

import systemsList from '../data/systems';
import footAndToe from '../data/foot-and-toe';

const customHistory = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Ubuntu', sans-serif;
        color: white;
    }

    body, #root {
        margin: 0;
        padding: 0;
        background-color: #1A1423;
    }

    .link, .link:visited, .link:active, .link:hover {
        border-radius: 0.5rem;
        border: 1px solid white;
        box-sizing: border-box;
        background-color: #3D314A;
        color: white;
        padding: 0.5rem;
        font-size: 1.25rem;
    }

    .link:hover, .link:active {
        border: 3px solid white;
    }

    .link:active {
        background-color: white;
        color: #3D314A;
    }

    .title {
        font-size: 2.0rem;
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

    const systemExercises = systemsArr.map((name) =>{
        return (
            footAndToe.map((exercises) => {
                return (
                    <Route
                        exact path={`${name[1]}${exercises.URL}`}
                        key={`${name[1]}${exercises.URL}`}
                        render={routeProps => <Exercise {...routeProps} system={name[0]} exerciseName={exercises.Name} />}
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
                <Route render={() => <div>404 Page Not Found</div>} />
            </Switch>
            <Footer />
            <GlobalStyle />
        </Router>
    );
}