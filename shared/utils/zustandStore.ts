import create, { createStore } from 'zustand';

interface StoreState {
  username: string;
  uuid: string;
  setUsername: () => void;
  setUUID: () => void;
}

const useStore = createStore<StoreState>((set) => ({
username: '',
uuid: '',
setUsername: () => set((state) => ({ username: state.username})),
setUUID: () => set((state) => ({ uuid: state.uuid})),
}));