const menuBtn = document.querySelector('.menu-btn')
            const navlinks = document.querySelector('.nav-links')
            menuBtn.addEventListener('click', ()=> {
                navlinks.classList.toggle('mobile-menu')
            });
            document.querySelector("#show-login").addEventListener("click",function(){
                document.querySelector(".popup").classList.add("active");
            });
            document.querySelector(".popup .close-btn").addEventListener("click",function(){
                document.querySelector(".popup").classList.remove("active");
            });

            
            const emailInput = document.getElementById('email');
            const passwordInput = document.querySelector('input[type="password"]');
            const buttonClick =document.querySelector('button[type="button"]');
            const sig = 'https://armand-api.herokuapp.com/api/login';

            buttonClick.addEventListener('click',(e)=>{
                console.log(emailInput.value)
            e.preventDefault();
            fetch(sig, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value,
                    
                  }),
                })
                .then( response =>response.json())
                .then(user =>{

                    if(user.message ==="Sucessful logged in"){
                        sessionStorage.setItem('token', user.token);
                        window.location.href = '../html/dash.html';
                    }
                    else if(user.message ==="Login fail"){
                        swal('Oops!', 'Invalid Password', 'error');
                
                    }
                    else if(user.message === "User not Registered"){
                        emailInput.value='';
                        passwordInput.value='';
                        swal('Oops!', 'Your are not registered', 'error');  
                    }


                })
                    
                
            })
            