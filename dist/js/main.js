$('.basic-form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: "required",
    // compound rule
    userPhone: {
      required: true,
      tel: true
    }
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: {
      required: "Обязательно укажите телефон"
    }
  },



});

$('[type=tel]').mask('+7(000) 000-00-00', {});
