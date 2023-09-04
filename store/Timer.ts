import { create } from 'zustand'

// define types for state values and actions separately
interface State {
	timerDuration: number
}

interface Actions {
	decrease: (by: number) => void
	// reset: () => void
}

// define the initial state
const initialState: State = {
	timerDuration: 1500,
}

// create store
export const useStore = create<State & Actions>()((set, get) => ({
	...initialState,

	decrease: (by: number) => {
		set({ timerDuration: get().timerDuration - by })
	},
}))
