import { create } from 'zustand'

// define types for state values and actions separately
interface State {
	time: number
	timer: string
}

interface Actions {
	updateTimer: (to: string) => void
	decrease: (by: number) => void
	reset: (duration: number) => void
}

// define the initial state
const initialState: State = {
	time: 1500,
	timer: 'default',
}

// create store
export const useStore = create<State & Actions>()((set, get) => ({
	...initialState,

	updateTimer: (to: string) => {
		console.log('updated')
		set({ timer: (get().timer = to) })
	},

	decrease: (by: number) => {
		set({ time: get().time - by })
	},

	reset: (duration: number) => {
		set({ time: (get().time = duration) })
	},
}))
