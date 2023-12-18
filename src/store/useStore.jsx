import { create } from 'zustand'

const useStore = create((set) => ({
  // initial states
  user: null,
  userName: "",
  userEmail: "",
  userId: "",
  showNavigationBar: false,
  // actions
  setUser: (loggedIn) => set((initialState) => ({ user: loggedIn})),
  setUserName: (newUserName) => set((initialState) => ({ userName: newUserName })),
  setUserEmail: (newUserEmail) => set((initialState) => ({ userEmail: newUserEmail })),
  setUserId: (newUserId) => set((initialState) => ({ userId: newUserId })),
  setShowNavigationBar: () => set((initialState) => ({ showNavigationBar: !showNavigationBar })),
  // other functions
  closeNavigationBar: () => set((initialState) => ({ showNavigationBar: false}))
}))

export default useStore