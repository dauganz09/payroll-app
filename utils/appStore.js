import create from "zustand";


const useStore = create((set,get) => ({
    nurse : '',
    vax_event : {},
    
    setVaxEvent : (vax_event) => set({vax_event}),
    setNurse: (val) => set((state) => ({ isPink: val })),
    getNurse : () => get().nurse,
   
    

}))


export default useStore;