const validator = new JustValidate("#form1");
validator
  .addField("#input1", [
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
  .addField("#input2", [
    {
      rule: "required",
      errorMessage: "Falta tu email",
    },
    {
      rule: "email",
      errorMessage: "Formato incorrecto",
    },
  ])
  .addField("#input3", [
    {
      rule: "required",
      errorMessage: "Falta tu mensaje",
    },
    {
      rule: "minLength",
      value: 4,
      errorMessage: "Mínimo 4 caracteres",
    },
  ])
  .onSuccess(() => {
    document.getElementById("form1").submit();
    Swal.fire({
      title: 'Tu mensaje se envio correctamente!',
      icon: 'success',
      showConfirmButton: false
    }
    )
  });
  
