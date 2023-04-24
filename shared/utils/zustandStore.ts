import {create} from 'zustand';

export interface StoreState {
  username: string;
  uuid: string;
  loginModal: boolean;
  setUsername: () => void ;
  setUUID: () => void;
  setLoginModal: () => void;
}

 export const useLoginStore = create<StoreState>((set) => ({
username: '',
uuid: '',
loginModal: false,
setLoginModal: () => set((state) => ({ ...state,loginModal:!state.loginModal})),
setUsername: () => set((state) => ({ username: state.username})),
setUUID: () => set((state) => ({ uuid: state.uuid})),
}));