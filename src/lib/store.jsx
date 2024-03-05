import { create } from 'zustand'

export const useStore = create((set, get) => ({
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow) => set({ overflow }),
  triggerTransition: '',
  setTriggerTransition: (triggerTransition) => set({ triggerTransition }),
  thresholds: {},
  addThreshold: ({ id, value }) => {
    let thresholds = { ...get().thresholds }
    thresholds[id] = value

    set({ thresholds })
  },
  // removeThreshold: (threshold) => {
  //   set({ threshold })
  // },
  introOut: false,
  setIntroOut: (introOut) => set({ introOut }),
}))
