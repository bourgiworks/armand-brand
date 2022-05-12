const getAllArticlesApi = 'https://armand-api.herokuapp.com/api/getAllArticles';

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
            <li>${articleData.indexOf(article) + 1}</li>
            <li>${article.topic}</li>
            <li><a href="#" class="btnDelete" onclick = "deleteArticle('${article._id}');">Delete</a> </li>
            <li><a href="#" class="btnEdit">Edit</a> </li>
            </ul>
            
            `;
          });
        }
      });
    }
  })
  .catch((err) => console.log(err));

//delete article
const deleteArticle = (id) => {
  fetch(`https://armand-api.herokuapp.com/api/DeleteArticle/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'Post Deleted') {
        swal('Deleted!', 'article has been Deleted', 'success');
      }
    })
    .catch((err) => console.log(err));
};
