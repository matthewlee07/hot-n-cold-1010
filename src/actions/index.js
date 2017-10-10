

export const TOGGLE = 'TOGGLE';
export const NEWGAME= 'NEWGAME'
export const BIGONE= 'BIGONE';
export const toggle = () => ({
    type: TOGGLE,
    //showInfoModal
    
});

export const newgame = () => ({
    type: NEWGAME,

    
});

export const bigone = (userguess) => ({
    type: BIGONE,
    userguess


});