// GET /comments - list all comments
// POST /comments - Create a new comment 
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment

const express = require('express')
const app = express()
const path = require('path');//makes sure our path is absolute
const { v4: uuid } = require('uuid');// package that will create universally unique id
const methodOverride = require('method-override');

//express parsing  middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))//we provide thestring we're looking for in the query string
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments =[
    {
        id:uuid(),
        username: 'Batman',
        comment: 'I hate summer days'
    },
    {
        id:uuid(),
        username: 'James',
        comment: 'Thats so funny'
    },
    {
        id:uuid(),
        username: 'Mona Lisa',
        comment: 'I am actually not smiling'
    },
    {
        id:uuid(),
        username: 'Superman',
        comment: 'Whatever happened to telephone booths??'
    }
]

// **********************************
// INDEX - renders multiple comments
// **********************************
//will READ all comments
app.get('/comments', (req, res) =>{
    //file index in comments folder, 2nd param is an object we want to have access to in our index.ejs template
    res.render('comments/index',{ comments })
})

// **********************************
// NEW - renders a form
// **********************************
//will create comments, by first just giving the form
app.get('/comments/new', (req,res) => {
    //will render the template comments/new
    res.render('comments/new');
})

// **********************************
// CREATE - creates a new comment
// **********************************
//post request so when comments are created its sent somehwere to be saved
app.post('/comments', (req,res) => {
    const {username,comment} = req.body;
    comments.push({username, comment, id:uuid()})
    // console.log(req.body);
    //redirect to the comments page so user can see all comments including new one posted 
    res.redirect('/comments')
})

// *******************************************
// SHOW - details about one particular comment
// *******************************************
// get request with unique identifiers
app.get('/comments/:id', (req, res) =>{
    // retireve id from params
    const { id } = req.params; // will retireve id value as a string
    //use an array to find the correct id
    const comment = comments.find(c => c.id === id)
    //first param is file to render, 2nd pram is dat value to pass to file to be accessible
    res.render('comments/show', { comment })
})

// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get('/comments/:id/edit', (req,res) =>{
    const { id } = req.params; // will retireve id value as a string
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id', (req,res) =>{
    const { id } = req.params; // will retireve id value as a string
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

// *******************************************
// DELETE/DESTROY- removes a single comment
// *******************************************
app.delete('/comments/:id', (req,res) =>{
    const { id } = req.params; // will retireve id value as a string
    const foundComment = comments.find(c => c.id === id);
    //filter function of array allows us to filter an array returns a new array and boolean value T/F
    //adds all elements to new array that is not equal to current comment ID
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')


})


app.get('/tacos', (req, res)=>{
    res.send("GET /tacos response")
})

app.post('/tacos', (req,res) => {
    //store key values from res.body (can see values on postman -> body -> url encoding )
    console.log(req.body);
    const {meat,qty}= req.body;
    res.send(`Here is your ${qty} ${meat} tacos! Enjoy!`)
})

app.listen(3000, () =>{
    console.log("on port 3000")
})