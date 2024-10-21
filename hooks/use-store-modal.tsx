import { create } from "zustand";

interface useStoreModalStore {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;
}


export const useStoreModal = create<useStoreModalStore>((set) => ({
    // add a default values of a store
    isOpen : false,
    onOpen : () => set({isOpen : true}),
    onClose: () => set({isOpen : false})  
}))