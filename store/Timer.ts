import { create } from 'zustand'

// define types for state values and actions separately
interface State {
	time: number
}

interface Actions {
	decrease: (by: number) => void
	reset: (duration: number) => void
}

// define the initial state
const initialState: State = {
	time: 1500,
}

// create store
export const useStore = create<State & Actions>()((set, get) => ({
	...initialState,

  

	decrease: (by: number) => {
		set({ time: get().time - by })
	},

	reset: (duration: number) => {
		set({ time: (get().time = duration) })
	},
}))
