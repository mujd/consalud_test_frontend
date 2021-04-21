import { useMemo } from 'react';
import randomColor from 'randomcolor';
import { useDispatch, useSelector } from 'react-redux';
import { selectActivePlanAction } from '../../../actions/plans';
import { formatMoney } from '../../../helpers';
import { BiStar } from '../icons';

const PlanCard = ({ plan }) => {
   const dispatch = useDispatch();
   const { activePlan } = useSelector((state) => state.plans);

   const { precio, Nombre, CodigoPlan } = plan;
   const randomBgColor = randomColor({
      luminosity: 'light',
      format: 'rgba',
      hue: 'blue',
   });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const memoBg = useMemo(() => randomBgColor, [selectActivePlanAction]);
   return (
      <button
         onClick={() => dispatch(selectActivePlanAction(plan))}
         className={`relative rounded-3xl shadow-md flex flex-col justify-center items-center p-4 h-48 outline-none focus:outline-none
         ${
            activePlan === plan
               ? ' bg-green-500 text-gray-200'
               : ' text-gray-700'
         }`}
         style={{
            backgroundColor: activePlan === plan ? null : memoBg || '#333',
            // opacity: activePlan === plan ? 0.95 : 1,
         }}>
         {activePlan === plan && (
            <div className="absolute left-5 top-5">
               <BiStar className="text-4xl" />
            </div>
         )}
         <h3 className="font-bold uppercase mb-3 xl:text-xl">
            plan <span className="lg:text-2xl">{Nombre}</span>{' '}
         </h3>
         <div className="flex flex-col sm:flex-row sm:justify-evenly w-full text-sm xl:text-lg font-semibold pl-4 sm:pl-0">
            <span className="mb-2 sm:mb-0">${formatMoney(precio)}</span>
            <span className="">#{CodigoPlan}</span>
         </div>
      </button>
   );
};

export default PlanCard;
