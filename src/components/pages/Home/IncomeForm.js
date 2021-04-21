import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { clean } from 'rut.js';
import { useForm } from '../../../hooks/useForm';
import { ImSpinner2 } from '../../ui/icons';
import { useFormErrors } from '../../../hooks/useFormErrors';
import {
   clearActivePlanAction,
   clearActiveRutAction,
   clearFilteredPlansAction,
   getAllFilteredPlansAction,
   selectActiveRutAction,
} from '../../../actions/plans';
import { useEffect } from 'react';

export const IncomeForm = () => {
   const dispatch = useDispatch();
   const { filteredPlans } = useSelector((state) => state.plans);
   const { loading, resetForm } = useSelector((state) => state.ui);
   const [formValues, handleInputChange, reset] = useForm({
      income: '',
      rut: '',
   });
   
   useEffect(() => {
      if (resetForm) {
         reset();
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [resetForm]);

   const { income, rut } = formValues;

   const { validateIncome, validateRut, formErrors } = useFormErrors(
      formValues
   );

   const handleRegister = (e) => {
      e.preventDefault();
      if (validateIncome() && validateRut()) {
         dispatch(getAllFilteredPlansAction(income));
         dispatch(selectActiveRutAction(clean(rut)));
      }
   };

   const handleResetForm = () => {
      dispatch(clearFilteredPlansAction());
      dispatch(clearActivePlanAction());
      dispatch(clearActiveRutAction());
      reset();
   };

   return (
      <div className="bg-white shadow-md rounded-sm p-5 h-96 w-full md:w-96">
         <h3 className="mb-5 text-lg text-center font-semibold">
            Formulario de renta
         </h3>
         <form
            onSubmit={handleRegister}
            className="fadeIn flex flex-col justify-around h-full max-h-72"
            noValidate>
            <div className="flex flex-col">
               <label
                  htmlFor="income"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Renta
               </label>
               <NumberFormat
                  displayType={'input'}
                  placeholder="$1.000.000"
                  autoComplete="off"
                  thousandSeparator={'.'}
                  decimalSeparator={','}
                  className="borde focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                  prefix={'$'}
                  onValueChange={handleInputChange}
                  value={income}
                  onBlur={validateIncome}
                  allowNegative={false}
               />
               {formErrors?.income && (
                  <span className="text-red-500 text-sm">
                     {formErrors?.income}
                  </span>
               )}
            </div>
            <div className="flex flex-col">
               <label
                  htmlFor="rut"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Rut
               </label>
               <input
                  className="borde focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                  type="text"
                  placeholder="14.512.256-2"
                  name="rut"
                  autoComplete="off"
                  value={rut}
                  onChange={handleInputChange}
                  onBlur={validateRut}
               />
               {formErrors?.rut && (
                  <span className="text-red-500 text-sm">
                     {formErrors?.rut}
                  </span>
               )}
            </div>

            <button
               type="submit"
               className="btn btn-dark w-full"
               disabled={loading}>
               {loading ? (
                  <div className="flex flex-row items-center justify-between">
                     <ImSpinner2 className="animate-spin mr-2 text-lg" />{' '}
                     <span>Cargando</span>
                  </div>
               ) : (
                  'Aceptar'
               )}
            </button>
            {filteredPlans?.length >= 1 && (
               <button
                  type="button"
                  className="btn btn-light w-full"
                  onClick={handleResetForm}>
                  Reiniciar
               </button>
            )}
         </form>
      </div>
   );
};
