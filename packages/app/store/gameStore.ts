import { create } from 'zustand'

export type GameState = {
  games: Record<string, Game>
  addGame: (id: string) => void
  startGame: (game: Game) => void
  getGame: (id: string) => Game
}

type Game = {
  id: string
  teamA: {
    name?: string
    score: number
    playerA: string
    playerB?: string
  }
  teamB: {
    name?: string
    score: number
    playerA: string
    playerB?: string
  }
  createdAt: Date
  status: 'NEW' | 'ACTIVE' | 'COMPLETE'
}

export const useGames = create<GameState>((set, get) => ({
  games: {},
  addGame: (id: string) =>
    set((state) => {
      state.games[id] = createGame(id)
      return state
    }),
  startGame: (game: Game) =>
    set((state) => {
      game.status = 'ACTIVE'
      state.games[game.id] = game
      console.log('game id=%s | status=%s', game.id, game.status)
      return state
    }),
  getGame: (id: string) => get().games[id],
  incScore: (id: string, isTeamB?: boolean) =>
    set((state) => {
      if (isTeamB) {
        state.games[id].teamB.score++
      } else {
        state.games[id].teamA.score++
      }
      return state
    }),
}))

const createGame = (id: string): Game => {
  return {
    id,
    teamA: {
      playerA: 'Player A',
      score: 0,
    },
    teamB: {
      playerA: 'Player A',
      score: 0,
    },
    createdAt: new Date(),
    status: 'NEW',
  }
}

export const createPlayer = (isPlayer2?: boolean) => {
  return isPlayer2 ? 'Player B' : 'Player A'
}
