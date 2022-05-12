const nameInput = document.querySelector('input[name="name"]');
nameInput.setAttribute('required', '');
const emailInput = document.querySelector('input[name="email"]');
emailInput.setAttribute('required', '');
const passwordInput = document.querySelector('input[type="password"]');
passwordInput.setAttribute('required', '');
const roleInput = document.querySelector('input[name="role"]');
roleInput.setAttribute('required', '');
const buttonClick =document.querySelector('input[type="button"]')
const sig = 'https://armand-api.herokuapp.com/api/signUp';

buttonClick.addEventListener('click',(e)=>{
    
e.preventDefault();
fetch(sig, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        role: roleInput.value,
      }),
    })
      .then(response =>response.json())
      .then(result =>{
          console.log(result);
          if(result.message === "User Created"){
            swal('Thank you!', 'You have registered successfully', 'success');
            window.location.href = '../html/index.html';
          
          
          }
          else if(result.message==="Mail Exist"){
          swal('Oops!', `${result.message}`, 'error');
          }
          else if(result.message === "\"password\" length must be at least 8 characters long"){
            swal('Sorry!', 'Password must be 8 character long')
          }
          else if(result.message === "\"email\" must be a valid email"){
            swal('Sorry!', 'Enter Valid Email')
          }
          else if(result.message === "\"userName\" is not allowed to be empty"){
            swal('Sorry!', 'Field required')
          }
          else if(result.message === "\"email\" is not allowed to be empty"){
            swal('Sorry!', 'Field required')
          }
      })

      
      .catch(err => console.log(err))
})

