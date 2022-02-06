const { Octokit } = require("@octokit/core");
// Octokit allows to make simple rest request to github for public repo access
const key = process.env.GITHUB_KEY;


const octokit = new Octokit({ auth:`${key}`});
const githubRes = octokit.request("GET /users/{org}/repos", {
  org: "frankrmelian",
  type: "private",
});


exports.HomeController = function (req,res,next){
	//   Key has to be passed as a string
  githubRes.then((data,err)=>{ 
    if(err) throw err;
    let api = data['data'];
    let sendToView = api.map(el => el)
    res.render('index',{ApiResponse:sendToView});
  })
   
}