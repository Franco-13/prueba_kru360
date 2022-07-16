export function validateInputs(input) {
  let errors = {};

  const regExpEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regExpPhone = /[0-9]/;

  if (input.contact_name.length === 0) {
    errors.contact_name = "Ingrese un nombre";
  }

  if (input.contact_lastName.length === 0) {
    errors.contact_lastName = "Ingrese un apellido";
  }

  if (input.contact_email.length === 0) {
    errors.contact_email = "Ingrese un correo";
  } else if (!regExpEmail.test(input.contact_email)) {
    errors.contact_email = "Ingrese un correo válido";
  }

  if (input.contact_phone.length === 0) {
    errors.contact_phone = "Ingrese un teléfono o celular";
  } else if (!regExpPhone.test(input.contact_phone)) {
    errors.contact_phone = "Ingrese un número válido";
  } else if (input.contact_phone.toString().length < 10) {
    errors.contact_phone = "Ingrese un número válido";
  }

  if (input.contact_brithday.length === 0) {
    errors.contact_brithday = "Ingrese una fecha";
  }

  if (input.contact_address.length === 0) {
    errors.contact_address = "Ingrese una dirección";
  }

  if (input.contact_origin?.length === 0) {
    errors.contact_origin = "Seleccione un origen";
  }

  if (input.contact_type?.length === 0) {
    errors.contact_type = "Seleccione un tipo de contacto";
  }

  return errors;
}
