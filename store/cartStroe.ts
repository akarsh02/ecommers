import {create} from 'zustand'
/* - need to return obj this is our global data 
-to update the state we use set method*/

const useCart = create((set) => ({   //create funciton returns hooks(access to data and actions)
  items: [],
  addProduct: (product: any) =>
    set((state: any) => ({
      items: [...state.items, {product,quantity:1}]
    })),
    resetCart:() => set({ items :[]})
}))

export default useCart