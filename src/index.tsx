/// <reference path='./index.d.ts' />

(window as any)[ 'React' ]    = require('react/dist/react.js');
(window as any)[ 'ReactDOM' ] = require('react-dom/dist/react-dom.js');

import React    = require('react');
import ReactDOM = require('react-dom');

import { App } from './components/App';

const db = require<DbComposeRecord[]>('./compose-db.json');

console.log(db);

console.log('Alice loves you, hentai baka ❤️');

ReactDOM.render(<App />, document.querySelector('#mount'));
