const validator = new JustValidate("#form2");

validator
  .addField("#input4", [
    {
      rule: "required",
      errorMessage: "Falta el largo",
    },
    {
      rule: "number",
    },
  ])
  .addField("#input5", [
    {
      rule: "required",
      errorMessage: "Falta el ancho",
    },
    {
      rule: "number",
    },
  ])
  .addField("#input6", [
    {
      rule: "required",
      errorMessage: "Falta la altura",
    },
    {
      rule: "number",
    },
  ])
  .addField("#input7", [
    {
      rule: "required",
      errorMessage: "Selecciona una opción",
    },
  ])
  .addField("#input8", [
    {
      rule: "required",
      errorMessage: "Falta tipo de material",
    },
  ])
  .addField("#input9", [
    {
      rule: "required",
      errorMessage: "Selecciona una opción",
    },
  ])
  .addField("#input10", [
    {
      rule: "required",
      errorMessage: "Selecciona una opción",
    },
  ])
  .addField("#input11", [
    {
      rule: "required",
      errorMessage: "Selecciona una opción",
    },
  ])
  .addField("#input12", [
    {
      rule: "required",
      errorMessage: "Falta tu nombre",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Mínimo 3 caracteres",
    },
  ])
  .addField("#input13", [
    {
      rule: "required",
      errorMessage: "Falta tu email",
    },
    {
      rule: "email",
      errorMessage: "Formato incorrecto",
    },
  ])
  .addField("#input14", [
    {
      rule: "required",
      errorMessage: "Falta tu télefono",
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Mínimo 10 dígitos",
    },
  ])
  .onSuccess(() => {
    document.getElementById("form2").submit();
    Swal.fire({
      title: 'Tu cotización se envio correctamente!',
      icon: 'success',
      showConfirmButton: false
    }
    )
  });
