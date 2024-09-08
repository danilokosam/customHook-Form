import { useState } from "react";

export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData); // <-- Solo se llama si existe una función onSubmit, envia el objeto formData
  };
  return { formData, handleInputChange, handleSubmit };
};

/* 
  En este customHook estamos usando una función useform, la cual recibe dos argumentos, el primero es el estado inicial, el segundo es la
  función que se ejecuta cuando el usuario envia el formulario. Luego iniciamos un estado con el valor de initialState.

  La función handleInputChange es la encargada de actualizar el estado con cada cambio que el usuario realiza en los inputs. Copiamos el 
  estador anterior con ...fornData y luego le agregamos a la key el valor del input que cambia.

  La función handleSubmit es la encargada de ejecutar la función onSubmit cuando el usuario envia el formulario. Dentro de ella se previene
  la recarga del formulario y si se pasa el onSubmit se ejecuta la función con el objeto formData.

  Por ultimo retornamos el objeto formData, el handleInputChange y el handleSubmit.
*/
