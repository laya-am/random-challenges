import { create } from "zustand";
import { produce } from "immer";
 
const initialLights = [
    {
        id: 1,
        name: 'Kitchen',
        isOn: false
    },
    {
        id: 2,
        name: 'Living Room',
        isOn: false
    },
    {
        id: 3,
        name: 'Bedroom',
        isOn: false
    },
    {
        id: 4,
        name: 'Bathroom',
        isOn: false
    },
    {
        id: 5,
        name: 'Garage',
        isOn: false
    },
    {
        id: 6,
        name: 'Porch',
        isOn: false
    },
    {
        id: 7,
        name: 'Garden',
        isOn: false
    },
    {
        id: 8,
        name: 'Office',
        isOn: false
    },
]

export const useLightsStore = create((set, get) => ({

    //always first give the initial state
    lights: initialLights,

    //numOfSwitchedOnLights doesn't change the state, it just uses it. so we use get here.
    numOfSwitchedOnLights: () => get().lights.reduce((prev, curr) => prev + (curr.isOn ? 1 : 0), 0),
    
    //handleToggle is a function with the parameter lightId.
    // the body of the func should be written using set, bc it's changing the state.
    //set always works with a callback and its parameter is state.
    // now after all that we can write how we actually wanna change the state.
    handleToggle: (lightId) => set(state => ({
        lights: produce(state.lights, draft => {
            const light = draft.find(light => light.id === lightId)
            light.isOn = !light.isOn
        })
    })),

    //same goes for switchAllLights
    switchAllLights: (shouldSwitchOn) => set(state => ({
        lights: produce(state.lights, draft => {
            draft.forEach(light => light.isOn = shouldSwitchOn)
        })
    }))
}))

// same code without immer:

// export const useLightsStore = create((set, get) => ({

//     lights: initialLights,

//     numOfSwitchedOnLights: () => get().lights.reduce((prev, curr) => prev + (curr.isOn ? 1 : 0), 0),

//     handleToggle: (lightId) => set((state) => ({
//       lights: state.lights.map(light => {
//         if (light.id === lightId) {
//           return { ...light, isOn: !light.isOn };
//         }
//         return light;
//       })
//     })),

//     switchAllLights: (boolean) => set((state) => ({
//       lights: state.lights.map(light => ({ ...light, isOn: boolean }))
//     }))
//   }));
  