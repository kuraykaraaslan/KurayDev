import React, { Component, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { useCookies } from 'react-cookie';

interface State {
    theme: string;
}

class ThemeButton extends Component<any, State> {

    constructor(props : any) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeThemeEachOther = this.changeThemeEachOther.bind(this);

    }

    componentDidMount() {
        //Check for theme in local storage
        const theme = localStorage.getItem('theme');

        if (theme) {
            this.changeTheme(theme);
            return;
        }

        //Default theme
        this.changeTheme('dark');
        localStorage.setItem('theme', 'dark');

    }

    changeTheme(theme: string) {
        const html = document.querySelector('html');
        if (html) {
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }

    changeThemeEachOther() {
        const html = document.querySelector('html');
        if (html) {
            if (html.getAttribute('data-theme') === 'dark') {
                this.changeTheme('light');
            } else {
                this.changeTheme('dark');
            }
        }
    }

    render() {

        return (
            <button className="btn btn-square btn-ghost rounded-full items-center justify-center grayscale duration-300 hover:grayscale-0" onClick={this.changeThemeEachOther}>
                <FontAwesomeIcon icon={faLightbulb} style={{ width: '24px', height: '24px' }} />
            </button>
        );
    }
}

export default ThemeButton;
