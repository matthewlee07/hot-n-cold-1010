import React from 'react';
import { connect } from 'react-redux';
import './top-nav.css';
import { toggle, newgame } from '../actions'
export class TopNav extends React.Component {

    onNewGame(event) {
        this.props.dispatch(newgame());
    }

    onInfo(event) {
        this.props.dispatch(toggle());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);