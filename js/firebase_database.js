---
---
//Added Frontmatter for Jakyll to replace variables

// Make sure only numbers are input
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey:             "{{site.data.settings.firebase-keys.apiKey           }}",
    authDomain:         "{{site.data.settings.firebase-keys.authDomain       }}",
    databaseURL:        "{{site.data.settings.firebase-keys.databaseURL      }}",
    projectId:          "{{site.data.settings.firebase-keys.projectId        }}",
    storageBucket:      "{{site.data.settings.firebase-keys.storageBucket    }}",
    messagingSenderId:  "{{site.data.settings.firebase-keys.messagingSenderId}}",
    appId:              "{{site.data.settings.firebase-keys.appId            }}",
    measurementId:      "{{site.data.settings.firebase-keys.measurementId    }}"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //console.log(firebase);
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }


  // Sttoring into Firebase is here

  // Reference messages collection(the table will have mesages)
  var messagesRef = firebase.database().ref().child('messages');
  
  // Listen for form submit
  document.getElementById('contactForm_new').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values 
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show firebase_store_status
    document.querySelector('.firebase_store_status').style.display = 'block';
  
    // Hide firebase_store_status after 3 seconds
    setTimeout(function(){
      document.querySelector('.firebase_store_status').style.display = 'none';
    },4000);
    

    // Clear form
    document.getElementById('contactForm_new').reset();
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }