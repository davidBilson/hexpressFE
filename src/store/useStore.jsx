import { create } from 'zustand'

const useStore = create((set) => ({
  // initial states
  user: null,
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
  setUser: (loggedIn) => set(() => ({ user: loggedIn})),
  setUserName: (newUserName) => set(() => ({ userName: newUserName })),
  setUserEmail: (newUserEmail) => set(() => ({ userEmail: newUserEmail })),
  setUserId: (newUserId) => set(() => ({ userId: newUserId })),
  setShowNavigationBar: () => set((initialState) => ({ showNavigationBar: !initialState.showNavigationBar })),
  // other functions
  closeNavigationBar: () => set(() => ({ showNavigationBar: false}))
}))

export default useStore