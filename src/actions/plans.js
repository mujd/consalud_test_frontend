import { types } from '../types/types';
import { finishLoading, startLoading, uiResetForm } from './ui';
import clientPlansAxios from '../api/planes';
import Swal from 'sweetalert2';

export const getAllFilteredPlansAction = (price) => {
   return async (dispatch) => {
      dispatch(startLoading());
      try {
         const resp = await clientPlansAxios.get(
            `/usersPlans/cPlans/?price=${price}`
         );
         dispatch(getAllFilteredPlans(resp?.data?.filteredPlans));
         dispatch(finishLoading());
      } catch (error) {
         console.log('ERROR: ', error);
         dispatch(finishLoading());
      }
   };
};

const getAllFilteredPlans = (plans) => ({
   type: types.getAllFilteredPlans,
   payload: plans,
});

export const getAllUsersPlansAction = () => {
   return async (dispatch) => {
      // dispatch(startLoading());
      try {
         const resp = await clientPlansAxios.get(`/usersPlans?limit=0`);
         dispatch(getAllUsersPlans(resp?.data?.usersPlans));
         dispatch(finishLoading());
      } catch (error) {
         console.log('ERROR: ', error);
         // dispatch(finishLoading());
      }
   };
};

const getAllUsersPlans = (plans) => ({
   type: types.getAllUsersPlans,
   payload: plans,
});

export const createUserPlanAction = (activePlan, activeRut) => {
   return async (dispatch) => {
      const userPlan = {
         planCode: activePlan.CodigoPlan,
         planPrice: activePlan.precio,
         planName: activePlan.Nombre,
         rut: activeRut,
      };
      dispatch(startLoading());
      try {
         const resp = await clientPlansAxios.post(`/usersPlans`, userPlan);
         dispatch(createUserPlan(resp?.data?.filteredPlans));
         dispatch(uiResetForm());
         dispatch(finishLoading());
         dispatch(clearFilteredPlansAction());
         dispatch(clearActivePlanAction());
         dispatch(clearActiveRutAction());
         dispatch(getAllUsersPlansAction());
      } catch (error) {
         console.log('ERROR: ', error);
         dispatch(finishLoading());
         dispatch(uiResetForm());
      }
   };
};
const createUserPlan = () => ({
   type: types.createUserPlan,
});

export const deleteUserPlanAction = (id) => {
   return async (dispatch) => {
      try {
         const resp = await clientPlansAxios.delete(`/usersPlans/${id}`);
         dispatch(deleteUserPlan(resp?.data?.filteredPlans));
         dispatch(getAllUsersPlansAction());
         Swal.fire('Plan de Usuario Borrado!', 'El plan de usuario fue borrado.', 'success');
      } catch (error) {
         console.log('ERROR: ', error);
      }
   };
};

const deleteUserPlan = () => ({
   type: types.deleteUserPlan,
});

export const clearFilteredPlansAction = () => ({
   type: types.clearFilteredPlans,
});

export const clearActivePlanAction = () => ({
   type: types.clearActivePlan,
});
export const selectActivePlanAction = (plan) => ({
   type: types.selectActivePlan,
   payload: plan,
});

export const clearActiveRutAction = () => ({
   type: types.clearActiveRut,
});
export const selectActiveRutAction = (rut) => ({
   type: types.selectActiveRut,
   payload: rut,
});
