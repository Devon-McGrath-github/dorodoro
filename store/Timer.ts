import { create } from 'zustand'

// define types for state values and actions separately
interface State {
	timer: number
}

interface Actions {
	decrease: (by: number) => void
	reset: (duration: number) => void
}

// define the initial state
const initialState: State = {
	timer: 1500,
}

// create store
export const useStore = create<State & Actions>()((set, get) => ({
	...initialState,

	decrease: (by: number) => {
		set({ timer: get().timer - by })
	},

	reset: (duration: number) => {
		set({ timer: (get().timer = duration) })
	},
}))
