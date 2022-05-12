const getAllArticlesApi = 'https://armand-api.herokuapp.com/api/getAllMessage';

fetch(`${getAllArticlesApi}`)
  .then((res) => {
      
    if (res.ok) {
      res.json().then((jsonResponse) => {
        console.log(jsonResponse);
        let articleData = jsonResponse;
        if (articleData.length > 0) {
          articleData.forEach((article) => {
            document.getElementById('title-display-content').innerHTML += `
            <ul>
            <li>${article.name}</li>
            <li>${article.message}</li>
            <li><a href="#" class="btn">Delete</a> </li>
            </ul>
            
            `;
          });
        }
      });
    }
  })
  .catch((err) => console.log(err));
