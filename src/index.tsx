/// <reference path='./index.d.ts' />

(window as any)[ 'React' ]    = require('react/dist/react.js');
(window as any)[ 'ReactDOM' ] = require('react-dom/dist/react-dom.js');

import { App } from './components/App';

import React    = require('react');
import ReactDOM = require('react-dom');

async function main () : Promise<void> {
    const db = await require<Promise<DbComposeRecord[]>>('awl!./compose-db.json');

    console.log(db);

    console.log('Alice loves you, hentai baka ❤️');

    ReactDOM.render(<App />, document.querySelector('#mount'));
}

window.addEventListener('DOMContentLoaded', () => {
    main().then(() => {});
});
