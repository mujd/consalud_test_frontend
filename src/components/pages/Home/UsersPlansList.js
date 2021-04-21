import { useDispatch } from 'react-redux';
import { format } from 'rut.js';
import Swal from 'sweetalert2';
import { deleteUserPlanAction } from '../../../actions/plans';
import { formatMoney } from '../../../helpers';
import { BiTrash, ImSpinner2 } from '../../ui/icons';

export const UsersPlansList = ({ usersPlans }) => {
   const dispatch = useDispatch();
   const deleteUser = (user) => {
      return Swal.fire({
         title: 'Estas seguro(a)?',
         text: 'Esta acción no tiene vuelta atras!!',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Si, Borralo!',
         cancelButtonText: 'No, dejemoslo',
      }).then((result) => {
         if (result.value) {
            dispatch(deleteUserPlanAction(user._id));
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
         } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
               'Cancelado',
               'Tu plan de usuario esta a salvo :)',
               'error'
            );
         }
      });
   };

   return (
      <div className="shadow-lg w-full bg-white rounded-sm p-4 overflow-x-auto max-h-96 fadeIn">
         <table className="w-full table-auto">
            <thead className="font-semibold">
               <tr>
                  <th className="bg-gray-200 border text-left px-8 py-3">#</th>
                  <th className="bg-gray-200 border text-left px-8 py-3">
                     Rut
                  </th>
                  <th className="bg-gray-200 border text-left px-8 py-3">
                     Nombre Plan
                  </th>
                  <th className="bg-gray-200 border text-left px-8 py-3">
                     Código Plan
                  </th>
                  <th className="bg-gray-200 border text-left px-8 py-3">
                     Precio Plan
                  </th>
                  <th className="bg-gray-200 border text-left px-8 py-3">
                     Acciones
                  </th>
               </tr>
            </thead>
            <tbody>
               {usersPlans?.length >= 1 ? (
                  usersPlans.map((userPlan) => (
                     <tr key={userPlan._id} className="text-xs xl:text-base">
                        <td className="border px-8 py-2">{userPlan._id}</td>
                        <td className="border px-8 py-2">
                           {format(userPlan.userRut)}
                        </td>
                        <td className="border px-8 py-2">
                           {userPlan.planName}
                        </td>
                        <td className="border px-8 py-2">
                           {userPlan.planCode}
                        </td>
                        <td className="border px-8 py-2 font-semibold">
                           ${formatMoney(userPlan.planPrice)}
                        </td>
                        <td className="border px-8 py-2">
                           <div className="flex flex-row justify-center">
                              <button
                                 className="w-10 btn-icon btn-danger"
                                 onClick={() => deleteUser(userPlan)}>
                                 <BiTrash />
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))
               ) : (
                  <tr>
                     <td className="border px-8 py-4" colSpan="4">
                        <div className="w-full flex justify-center items-center">
                           <div className="flex flex-row items-center justify-between">
                              <ImSpinner2 className="animate-spin mr-2 text-lg" />{' '}
                              <span>Cargando</span>
                           </div>
                        </div>
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};
