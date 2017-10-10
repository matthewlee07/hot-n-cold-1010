export const TOGGLE = 'TOGGLE';
export const toggle = () => ({
    type: TOGGLE,
});

export const NEWGAME= 'NEWGAME'
export const newgame = () => ({
    type: NEWGAME,

    
});

export const BIGONE= 'BIGONE';
export const bigone = (userguess) => ({
    type: BIGONE,
    userguess
});