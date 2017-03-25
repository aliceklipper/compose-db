import React = require('react');

export interface AppProps {
}

export interface AppState {
}

export class App extends React.Component<AppProps, AppState> {
    constructor (props : AppProps) {
        super(props);

        require<Style>('./App.less').use();
    }

    render () {
        return (
            <div className="App">
                <header>X.Org Compose sequences database</header>
            </div>
        );
    }
}
