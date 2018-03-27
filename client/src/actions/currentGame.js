export const ROLL_DICE = 'ROLL_DICE';
export const TOGGLE_KEPT = 'TOGGLE_KEPT'

export const rollDice = () => {
  return (dispatch, getState) => {
    let { keep, dice } = getState().currentGame;

    let newDice = dice.map( (value, index) => {
      if (keep.includes(index))
        return value
      return Math.floor(Math.random() * 6) + 1
    });

    dispatch({ type: 'ROLL_DICE', dice: newDice })
  }
}

export const toggleKept = (index) => {
  return (dispatch, getState) => {
     let { keep } = getState().currentGame;
     let updatedKeep;

      if (keep.includes(index))
        updatedKeep = keep.filter( k => k !== index )
      else
        updatedKeep = [...keep, index]

      dispatch({ type: 'TOGGLE_KEPT', keep: updatedKeep })
  }
}
