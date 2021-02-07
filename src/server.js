const express = require("express");
const server = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configure nunjucks (template engine)
const nunjucks = require("nunjucks");
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});


//server config
server
//receive data of req.body
.use(express.urlencoded({ extended: true}))
//configure css, scripts, imgs
.use(express.static("public"))                  //static are img, css, front-end scripts /use is a configuration of server
// application loop
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start of server   
.listen(5500);

//req - requisition , res - response

/* function express() {
  return {
        name: Cleopatra,
        age: 37
    }
}
*/

/*.get("/", (req, res) => {
    return res.send("NLW speaks")
})
.get("/study", (req, res) => {
    return res.send("Pagina study")
})
.listen(5500) */
