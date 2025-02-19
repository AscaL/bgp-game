import type { Game, Move } from "boardgame.io";

export interface MyGameState {
  // aka 'G', your game's state
}

const move: Move<MyGameState> = ({ G, ctx }) => {};

export const BGP: Game<MyGameState> = {
  setup: () => ({ cells: Array.from({ length: 9 }).fill(null) }),

  moves: {
    clickCell: ({ G, playerID }, id) => {
      G.cells[id] = playerID
    },
  },

  turn: {
    moveLimit: 1,
  },
}
