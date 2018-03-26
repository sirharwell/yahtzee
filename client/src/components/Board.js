import React from 'react';
import Dice from './Dice';
import { Grid, Button, Divider } from 'semantic-ui-react';

const Board = ({ roll, dice, keep, rollDice, toggleKept }) => {
  let maxRoll = roll === 3;
  let disabled = maxRoll ? { disabled: true } : {}

  return (
    <Grid>
      <Grid.Row>
        <Button
          fluid
          onClick={rollDice}
          {...disabled}
        >
          { maxRoll ? 'Score Roll' : 'Roll' }
        </Button>
        <Grid.Column width={16}>
          <Divider hidden />
        </Grid.Column>
        { roll > 0 &&
          dice.map( (d, i) => {
            let kept = keep.includes(i);
            return (
              <Dice
                key={i}
                value={d}
                kept={kept}
                toggleKept={toggleKept}
                index={i}
              />
            )
          })
        }
      </Grid.Row>
    </Grid>
  )
}

export default Board;
