// let blog = fetch("https://armand-api.herokuapp.com/api/getAllArticles");
// blog
// .then(data => data.json())
// .then(res => console.log(res));
const getAllArticlesApi = 'https://armand-api.herokuapp.com/api/getOneArticle/${id}';

fetch(`${getAllArticlesApi}`)
  .then((res) => {
      
    if (res.ok) {
      res.json().then((jsonResponse) => {
        console.log(jsonResponse);
        let articleData = jsonResponse;
        if (articleData.length > 0) {
          articleData.forEach((article) => {
            document.getElementById('ballcontent').innerHTML += `
            
             `;
          });
        }
      });
    }
  })
  .catch((err) => console.log(err));
  ///

 

fetch(`${getAllArticlesApi}`)
  .then((res) => {
      
    if (res.ok) {
      res.json().then((jsonResponse) => {
        console.log(jsonResponse);
        let articleData = jsonResponse;
        if (articleData.length > 0) {
          articleData.forEach((article) => {
            document.getElementById('ball-content').innerHTML += `
            <div id="bimg">
            <img src="../images/human.jpg">
            </div>
            <div id="article-container">
            <div id="pcontent">
            ${article.topic}
            </div>
            <div id ="pcontent-body">
                <p>${article.content}</p>

            </div>
        </div>
            <div id="like-comment-count">
            <input type="button" id="bbutton" value="Readmore" onclick()>  <label id="lik1">34 likes</label> <label id="com1">5 comments </label> 
            </div>
            <div id="linec"></div>
            <div id="like-comment-display">
            <label id="lik1A"><i class="fa-solid fa-thumbs-up"></i>like</label> <label id="com1A"><a href= "#"><i class="fa-solid fa-comments"></i>comments</a> </label>
            </div>
            `;
          });
        }
      });
    }
  })
  .catch((err) => console.log(err));


  //comment on article

  const  = 'https://armand-api.herokuapp.com/api/getAllMessage';

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

