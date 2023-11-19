import { create } from 'zustand'

const useStore = create((set) => ({
  // initial states
  user: null,
  userName: "",

  // setter functions to update the initial state
  setUser: () => set((initialState) => ({ user : "" })),
  setUserName: () => set((initialState) => ({ userName : "" })),

}))

export default useStore