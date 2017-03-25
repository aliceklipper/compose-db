import React = require('react');

export interface ComposeTableProps {
}

export interface ComposeTableState {
}

export class ComposeTable extends React.Component<ComposeTableProps, ComposeTableState> {
    constructor (props : ComposeTableProps) {
        super(props);

        require<Style>('./ComposeTable.less').use();
    }

    render () {
        return (
            <div className="ComposeTable">
                <header>X.Org Compose sequences database</header>
            </div>
        );
    }
}
