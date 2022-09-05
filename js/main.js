$(document).ready(function () {
  $('#submit').click(function (e) {
    e.preventDefault();
    let fName = $('#fName').val();
    let lName = $('#lName').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    let message = $('#message').val();
    let _subject = $('#_subject').val();
    let validEmail =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $('#fName, #lName, #phone, #email, #message').removeClass('input-error');
    if (fName == '' || lName == '' || email == '') {
      $('#fName, #lName, #email').addClass('input-error');
      $('#error_message').html('All Fields are required!');
    } else if (!validEmail.test(email)) {
      $('#email').addClass('input-error');
      $('#error_message').html('Write a valid e-mail address!');
    } else {
      $('#error_message').html('');
      $('#loader').css('display', 'inline');
      $.ajax({
        url: 'https://formsubmit.co/ajax/haithamsanari@gmail.com',
        method: 'POST',
        data: {
          fName: fName,
          lName: lName,
          phone: phone,
          email: email,
          message: message,
          _subject: _subject,
        },
        success: function (data) {
          $('form').trigger('reset');
          $('#success_message').fadeIn().html('Thank you for submitting', data);
          setTimeout(function () {
            $('#loader').fadeOut(1);
          });
          setTimeout(function () {
            $('#success_message').fadeOut('Slow');
          }, 4000);
        },
      });
    }
  });
});
