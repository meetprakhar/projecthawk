
// Make sure only numbers are input
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }


// Storing into Firebase is here

// For subscribtion form
{
    // Listen for form submit
    form_sub = document.getElementById('subscribe-form');
    
    if(form_sub != null){
      form_sub.addEventListener('submit', subscribeUser);
    }

    // Reference messages collection(the table will have mesages)
    var subsRef = firebase.database().ref().child('subscribtion-list');

    // function to push subs
    function subscribeUser(e){
      e.preventDefault();

      // Get values 
      var email = getInputVal('sub-EMAIL');

      var newSubsRef = subsRef.push();
      newSubsRef.set({
        email:email
      }, function(error){
        if(error){
          // Data write failed!
          document.getElementById('sub_fail_msg').style.display = 'block';
        
        } else {
          // Data Saved Successfully
          document.getElementById('sub_success_msg').style.display = 'block';
        
        }
      });

          // Hide firebase_store_status after 3 seconds
          setTimeout(function(){
            document.getElementById('sub_success_msg').style.display = 'none';
            document.getElementById('sub_fail_msg').style.display = 'none';
          },4000);

    }
  
  
  // For Contact Us form
  
  // Listen for form submit
  form_ct = document.getElementById('contactForm_contact_us');

  if(form_ct != null){
    form_ct.addEventListener('submit', submitContact);
  }

    // Reference messages collection(the table will have mesages)
    var contactRef = firebase.database().ref().child('contact-us');
    
    var SuccessBoxId = 'ct-fire-success';
    var FailBoxId = 'ct-fire-fail';
    

    // function to push subs
    function submitContact(e){
      e.preventDefault();

      // Get values 
      var email = getInputVal('ct-email');
      var name = getInputVal('ct-name');
      var phone = getInputVal('ct-phone');
      var msg = getInputVal('ct-message');

      var newcontactRef = contactRef.push();
      newcontactRef.set({
        name: name,
        email:email,
        phone: phone,
        msg:msg
      }, function(error){
        if(error){
          // Data write failed!
          document.getElementById(FailBoxId).style.display = 'block';
        
        } else {
          // Data Saved Successfully
          document.getElementById(SuccessBoxId).style.display = 'block';
        
        }
      });

          // Hide firebase_store_status after 3 seconds
          setTimeout(function(){
            document.getElementById(SuccessBoxId).style.display = 'none';
            document.getElementById(FailBoxId).style.display = 'none';
          },4000);

    }
}


// For FAQ form
{
    // Listen for form submit
    form_faq = document.getElementById('faqForm');

    if(form_faq != null){
      form_faq.addEventListener('submit', submitQuestion);
    }
    
    // Reference messages collection(the table will have mesages)
    var FAQRef = firebase.database().ref().child('faqForm');

    var SuccessBoxId = 'faq-fire-success';
    var FailBoxId = 'faq-fire-fail';
    

    // function to push subs
    function submitQuestion(e){
      e.preventDefault();

      // Get values 
      var email = getInputVal('faq-email');
      var name = getInputVal('faq-name');
      var phone = getInputVal('faq-phone');
      var msg = getInputVal('faq-message');

      var newFAQRef = FAQRef.push();
      newFAQRef.set({
        name: name,
        email:email,
        phone: phone,
        msg:msg
      }, function(error){
        if(error){
          // Data write failed!
          document.getElementById(FailBoxId).style.display = 'block';
        
        } else {
          // Data Saved Successfully
          document.getElementById(SuccessBoxId).style.display = 'block';
        
        }
      });

          // Hide firebase_store_status after 3 seconds
          setTimeout(function(){
            document.getElementById(SuccessBoxId).style.display = 'none';
            document.getElementById(FailBoxId).style.display = 'none';
          },4000);

    }
}

// For Request Callback
{
// Listen for form submit
//form_rcb = document.getElementById('req_callback_form');

//form_rcb.addEventListener('submit', submitCallback);


// Reference messages collection(the table will have mesages)
var callBackRef = firebase.database().ref().child('callback-list');

var SuccessBoxId = 'rcb-fire-success';
var FailBoxId = 'rcb-fire-fail';


// function to push subs
function submitCallback(){

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  // Get values 
  var email = getInputVal('rcb-email');
  var name = getInputVal('rcb-name');
  var phone = getInputVal('rcb-phone');

  var newcallBackRef = callBackRef.push();
  newcallBackRef.set({
    name: name,
    email:email,
    phone: phone,
    time:dateTime
  }, function(error){
    if(error){
      // Data write failed!
      document.getElementById(FailBoxId).style.display = 'block';

      // Hide firebase_store_status after 4 seconds
      setTimeout(function(){
        document.getElementById(FailBoxId).style.display = 'none';
      },4000);

    } else {
      // Data Saved Successfully
      document.getElementById(SuccessBoxId).style.display = 'block';
      document.getElementById('req_callback_form').reset();

      // Hide dialog after 4 seconds
      setTimeout(function(){
        $('#modalContactForm').modal('hide')
        document.getElementById(SuccessBoxId).style.display = 'none';
      },4000);

    }
  });
}
}