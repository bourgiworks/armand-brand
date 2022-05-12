const topicInput = document.querySelector('input[name="topic"]');
const contentInput = document.getElementById("textarea");
  // const imageInput = document.querySelector('input[type="file"]');
//  const token = sessionStorage.getItem('token');
const buttonClick =document.querySelector('input[type="button"]')
buttonClick.addEventListener('click', (e) => {

    e.preventDefault();
    fetch('https://armand-api.herokuapp.com/api/PostArticle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic: topicInput.value,
        content: contentInput.value,
        //  articleImage: uploadedFileUrl,
      }),
    })
      .then((newArticle) => newArticle.json())
      .then((message) => {
      
        console.log(message);
      })
      .catch((err) => console.log(err));
  });