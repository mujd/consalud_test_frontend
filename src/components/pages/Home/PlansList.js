import { useDispatch, useSelector } from 'react-redux';
import {
   createUserPlanAction,
} from '../../../actions/plans';
import { PlanCard } from '../../ui';
import { ImSpinner2 } from '../../ui/icons';

export const PlansList = () => {
   const dispatch = useDispatch();
   const { filteredPlans, activePlan, activeRut } = useSelector(
      (state) => state.plans
   );
   const { loading } = useSelector((state) => state.ui);

   return (
      <>
         {!loading ? (
            <>
               {filteredPlans?.length >= 1 && (
                  <h3 className="text-lg font-semibold mb-3">
                     Selecciona un plan:
                  </h3>
               )}
               <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {filteredPlans?.map((plan, i) => (
                     <PlanCard key={i} plan={plan} />
                  ))}
               </div>
            </>
         ) : (
            <div className="w-full flex flex-col items-center justify-center h-48">
               <ImSpinner2 className="animate-spin text-5xl mb-3 text-gray-700" />
               <span className="animate-pulse text-lg font-semibold">
                  Cargando Planes
               </span>
            </div>
         )}
         {activePlan && (
            <button
               type="button"
               className="btn btn-primary w-full mt-4"
               onClick={() =>
                  dispatch(createUserPlanAction(activePlan, activeRut))
               }>
               Guardar plan
            </button>
         )}
      </>
   );
};
