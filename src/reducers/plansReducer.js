import { types } from '../types/types';

const initialState = {
   userPlan: null,
   usersPlans: null,
   filteredPlans: null,
   activePlan: null,
   activeRut: null,
};

export const plansReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.getAllUsersPlans:
         return {
            ...state,
            usersPlans: action.payload,
         };
      case types.getAllFilteredPlans:
         return {
            ...state,
            filteredPlans: action.payload,
         };
      case types.clearFilteredPlans:
         return {
            ...state,
            filteredPlans: null,
         };
      case types.selectActivePlan:
         return {
            ...state,
            activePlan: action.payload,
         };
      case types.clearActivePlan:
         return {
            ...state,
            activePlan: null,
         };
      case types.selectActiveRut:
         return {
            ...state,
            activeRut: action.payload,
         };
      case types.clearActiveRut:
         return {
            ...state,
            activeRut: null,
         };
      case types.createUserPlan:
         return {
            ...state,
            // userPlan: null,
         };

      default:
         return state;
   }
};
