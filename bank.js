document.getElementById('login-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const useremail = emailField.value
  const passwordField = document.getElementById('user-password');
  const userpassword = passwordField.value
  if(useremail == 'sontan@baap.com'  && userpassword == 'secret'){
    window.location.href = 'banking.html'
  }
 
})
 