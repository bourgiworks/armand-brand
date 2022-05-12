const nameInput = document.getElementById('f1box');
nameInput.setAttribute('required', '');
const emailInput = document.getElementById('fbox');
emailInput.setAttribute('required', '');
const messageInput = document.getElementById('textarea');
messageInput.setAttribute('required', '');
const buttonClick =document.querySelector('input[type="button"]')
const sig = 'https://armand-api.herokuapp.com/api/postMessage';

buttonClick.addEventListener('click',(e)=>{
    
e.preventDefault();
fetch(sig, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    
      }),
    })
      .then(response =>response.json())
      .then(result =>{
          console.log(result);
        //   if(result.message === "User Created"){
        //     swal('Thank you!', 'Message sent to Us', 'success');
        //     window.location.href = '../html/contact.html';
          
          
        //   }
        //   else if(result.message==="Mail Exist"){
        //   swal('Oops!', `${result.message}`, 'error');
        //   }
        //   else if(result.message === "\"password\" length must be at least 8 characters long"){
        //     swal('Sorry!', 'Password must be 8 character long')
        //   }
        //   else if(result.message === "\"email\" must be a valid email"){
        //     swal('Sorry!', 'Enter Valid Email')
        //   }
        //   else if(result.message === "\"userName\" is not allowed to be empty"){
        //     swal('Sorry!', 'Field required')
        //   }
        //   else if(result.message === "\"email\" is not allowed to be empty"){
        //     swal('Sorry!', 'Field required')
        //   }
      })

      
      .catch(err => console.log(err))
})

