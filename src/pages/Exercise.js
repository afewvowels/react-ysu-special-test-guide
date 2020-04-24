import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BackLinkStyle from '../Themes/BackLinkStyle';

import selectSystem from '../data/select-system';

const StyledSection = styled.div`
    border-radius: 0.5rem;
    border: 1px solid white;
    box-sizing: border-box;
    background-color: #3D314A;
    color: white;
    padding: 0.5rem;
    font-size: 1.25rem;

    h4 {
        font-size: 1.5rem;
    }

    p, li {
        font-size: 1.15rem;
        line-height: 1.45rem;
    }

    ol, ul {
        list-style-position: outside;
        padding: 0 0 0 1.25rem;
    }

    * {
        margin: 0;
    }

    * + * {
        margin: 0.5rem 0 0 0;
    }
`;

export default function Exercise(props) {
    const system = selectSystem(props.systemName);

    const exerciseInfo = system.find(element => element.Name === props.exerciseName);

    const html = Object.entries(exerciseInfo).map((exercise) => {
        var key = exercise[0];
        var value = exercise[1];

        function title() {
            return <h4>{key}</h4>;
        }

        function body() {
            if (!Array.isArray(value)) {
                return <p>{value}</p>;
            } else if (Array.isArray(value) && key === "Evaluation Procedure") {
                return (
                    <ol>
                        {
                            value.map((item) => {
                                return <li key={item}>{item}</li>;
                            })
                        }
                    </ol>
                );
            } else {
                return(
                    <ul>
                        {
                            value.map((item) => {
                                return <li key={item}>{item}</li>;
                            })
                        }
                    </ul>
                );
            }
        }

        if (key !== "URL") {
            return (
                <StyledSection className='section' key={exercise[0]}>
                    {title()}
                    {body()}
                </StyledSection>
            );
        } else {
            return null;
        }
    });

    return (
        <>
            <BackLinkStyle />
            <h2><Link className="back-link" to={props.systemURL}>{props.systemName}</Link></h2>
            <h3>{props.exerciseName}</h3>
            {html}
        </>
    );
};