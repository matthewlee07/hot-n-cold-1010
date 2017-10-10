import React from 'react';
import {connect} from 'react-redux';
import './guess-form.css';
import {bigone} from '../actions';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        this.props.dispatch(bigone(Number(this.input.value)));
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

export default connect()(GuessForm);