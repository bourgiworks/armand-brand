// let blog = fetch("https://armand-api.herokuapp.com/api/getAllArticles");
// blog
// .then(data => data.json())
// .then(res => console.log(res));
const getAllArticlesApi = 'https://armand-api.herokuapp.com/api/getAllArticles';

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
                    <div id="bbutton" onclick="getSingleArticle(${article._id})">
                    <a href= "single-article.html"><input type="button"  value="Readmore" > </a> 
                    </div>
            
            
            `;
          });
        }
      });
    }
  })
  .catch((err) => console.log(err));


  const getSingleArticle =(articleId)=>{
    fetch('https://armand-api.herokuapp.com/api/GetOneArticle/'+ articleId)
    .then(res=> res.json())
    .then(response => console.log(response))

  }

  
