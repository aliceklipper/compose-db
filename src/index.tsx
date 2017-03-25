/// <reference path='./index.d.ts' />

(window as any)[ 'React' ]    = require('react/dist/react.js');
(window as any)[ 'ReactDOM' ] = require('react-dom/dist/react-dom.js');

import React    = require('react');
import ReactDOM = require('react-dom');

console.log('Alice loves you, hentai baka ❤️');

ReactDOM.render(
    (
        <div>
            <p>Alice loves you, hentai baka ❤</p>
        </div>
    ), document.querySelector('#mount')
);
