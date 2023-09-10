import './GlobalStyle.scss';
import { useEffect } from 'react';


function GlobalStyle({ children }) {
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            document.documentElement.setAttribute('data-theme', (event.matches ? "dark" : "light"));
        });
    });

    return children;
}

export default GlobalStyle;