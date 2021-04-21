import { useState } from 'react';
import { validate } from 'rut.js';

export const useFormErrors = (formValues = []) => {
   const [formErrors, setFormErrors] = useState({
      income: '',
      rut: '',
   });

   const validateRut = () => {
      if (formValues?.rut?.trim().length === 0) {
         setFormErrors({
            ...formErrors,
            rut: 'El rut es obligatorio',
         });
         return false;
      } else if (!validate(formValues?.rut)) {
         setFormErrors({
            ...formErrors,
            rut: 'El rut no es válido',
         });
         return false;
      } else {
         setFormErrors({
            ...formErrors,
            rut: '',
         });
         return true;
      }
   };
   const validateIncome = () => {
      if (formValues?.income?.length === 0) {
         setFormErrors({
            ...formErrors,
            income: 'La renta es obligatoria',
         });
         return false;
      } else if (formValues?.income < 500000 || formValues?.income > 1000000) {
         setFormErrors({
            ...formErrors,
            income: 'La renta debe ser entre $500.000 y $1.000.000',
         });
         return false;
      } else {
         setFormErrors({
            ...formErrors,
            income: '',
         });
         return true;
      }
   };

   return {
      formValues,
      validateIncome,
      validateRut,
      formErrors,
   };
};
