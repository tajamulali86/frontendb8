import { create } from 'zustand'

export const countStore = create((set) => ({
  count: 10,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  updateByInput: (input) => set(() => ({ count: input })),
}))

