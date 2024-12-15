// src/store/bmiStore.js
import { defineStore } from 'pinia'

//defining the pinia store for bmi calculation
export const useBmiStore = defineStore('bmiStore', {
  state: () => ({
    weight: 0, //weight in kg
    height: 0, //height in cm
  }),
  getters: {
    //comp prop for calculating bmi
    //formula
    bmi: (state) => {
      if (state.height === 0 || state.weight === 0) return 0
      return state.weight / ((state.height / 100) ** 2)
    },
  },
  actions: {
    //action to set weight
    setWeight(newWeight) {
      this.weight = newWeight //update weight in store
    },
    //actin to set height
    setHeight(newHeight) {
      this.height = newHeight //update height in store
    },
  },
})
