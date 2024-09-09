import { create } from "zustand";

export const store = create((set) => ({
    currency:'usd',
 
    setcurrency: (newCurrency) => {
        set((state) => {
            return {
                ...state,

                currency: newCurrency,
            }
        })
    }
}));

