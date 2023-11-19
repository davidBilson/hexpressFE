import { create } from 'zustand'

const useStore = create((set) => ({
  // initial states
  user: null,
  userName: "",
  showNavigationBar: false,
  
  // need to learn how to update state dynamically in zustand
  // setter functions to update the initial state
  setUser: () => set((initialState) => ({ user : "" })),
  setUserName: () => set((initialState) => ({ userName : "" })),
  setShowNavigationBar: () => set((initialState) => ({ showNavigationBar: !showNavigationBar })),

  // other functions
  closeNavigationBar: () => set((initialState) => ({ showNavigationBar: false}))
}))

export default useStore