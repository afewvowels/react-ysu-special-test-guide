import { createGlobalStyle } from 'styled-components';

const BackLinkStyle = createGlobalStyle`
    .back-link {
        text-decoration: underline;
        display: inline-block;
    }

    .back-link::after {
        font-family: 'Font Awesome 5 Free';
        content: '\f3bf';
        text-decoration: none;
        margin-left: 0.3rem;
    }

    h1 > .back-link::after {
        font-size: 1.5rem;
    }

    h2 > .back-link::after {
        font-size: 1.2rem;
    }
`;

export default BackLinkStyle;