import { create } from 'zustand'

const useStore = create((set) => ({
  // initial states
  user: null,
  // user: true,
  userName: "",
  userEmail: "",
  userId: "",
  showNavigationBar: false,
  distanceUnit: true,
  loadAnimation: false,
  // actions
  setLoadAnimation: () => set(() => ({ loadAnimation: true })),
  setUnLoadAnimation: () => set(() => ({ loadAnimation: false })),
  setDistanceUnit: () => set((initialState) => ({ distanceUnit: !initialState.distanceUnit})),
  // updating a boolean
  setUser: (loggedIn) => set(() => ({ user: loggedIn})),
  // updating a string
  setUserName: (newUserName) => set(() => ({ userName: newUserName })),
  setUserEmail: (newUserEmail) => set(() => ({ userEmail: newUserEmail })),
  setUserId: (newUserId) => set(() => ({ userId: newUserId })),
  // updating a boolean
  setShowNavigationBar: () => set((initialState) => ({ showNavigationBar: !initialState.showNavigationBar })),
  // other functions
  closeNavigationBar: () => set(() => ({ showNavigationBar: false}))
}))

export default useStore