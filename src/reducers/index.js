import * as actions from '../actions';
import { TOGGLE, NEWGAME, BIGONE, } from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
};

export const gameReducer = (state=initialState, action) => {
  // guess reducer
  switch (action.type) {
    case BIGONE:
      let guess = parseInt(action.userguess, 10);
      console.log('guess ', guess);
      console.log('floor ', Math.floor(guess));
      if (isNaN(guess) || guess > 100 || guess < 0 || action.userguess !== guess) {
        return Object.assign({}, state, {
        feedback: 'Please enter a valid integer between 0 and 100'
        });
      }
      if (state.guesses.indexOf(guess)>=0){
        return Object.assign({}, state, {
          feedback: 'You already guessed that one'
          });
      }

            const difference = Math.abs(guess - state.correctAnswer);

            let feedback;
            if (difference >= 50) {
                feedback = 'You\'re Ice Cold...';
            }
            else if (difference >= 30) {
                feedback = 'You\'re Cold...';
            }
            else if (difference >= 10) {
                feedback = 'You\'re Warm';
            }
            else if (difference >= 1) {
                feedback = 'You\'re Hot!';
            }
            else {
                feedback = 'You got it!';
            }

            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses, guess]
            });


        // show infomodal/true false toggle
        case TOGGLE:
            return Object.assign({}, state, {
                showInfoModal: !state.showInfoModal
            });


        // new game toggle
        case NEWGAME:
            return Object.assign({}, state, {
                guesses: [],
                correctAnswer: Math.floor(Math.random() * 100) + 1,
                feedback: 'Make your guess!'
            });
    }

    return state;

}

