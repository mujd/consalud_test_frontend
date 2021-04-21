import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersPlansAction } from '../../../actions/plans';
import { Navbar } from '../../ui';
import { IncomeForm } from './IncomeForm';
import { PlansList } from './PlansList';
import { UsersPlansList } from './UsersPlansList';

const HomeScreen = () => {
   const { usersPlans } = useSelector((state) => state.plans);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!usersPlans) {
         dispatch(getAllUsersPlansAction());
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [usersPlans]);

   return (
      <div className="pb-24">
         <Navbar />
         <div className="mx-auto container lg:px-10 px-4 md:px-0 grid md:grid-cols-2 md:gap-5">
            <div className="flex justify-center mt-10">
               <IncomeForm />
            </div>
            <div className="mt-10">
               <PlansList />
            </div>
         </div>
         <div className="container flex justify-center w-full mx-auto mt-5">
            {usersPlans && <UsersPlansList usersPlans={usersPlans} />}
         </div>
      </div>
   );
};

export default HomeScreen;
