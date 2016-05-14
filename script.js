var btn = $('.submitBtn');

btn.on('click', function() {

  var fName = $('.fName').val();
  var mName = $('.mName').val();
  var lName = $('.logName').val();
  var dob = $('.dob').val();
  var ssn = $('.ssn').val();
  var address = $('.address').val();
  var city = $('.city').val();
  var state = $('.state').val();
  var zip = $('.zip').val();
  var email = $('.email').val();
  var company = $('.company').val();


  var obj = {
              fName: fName,
              mName: mName,
              lName: lName,
              dob: dob,
              ssn: ssn,
              address: address,
              city: city,
              state: state,
              zip: zip,
              email: email,
              company: company
            };


  console.log(obj);

});


