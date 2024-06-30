const express = require("express");

const mongoose =    require("mongoose")

const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

mongoose.connect("mongodb+srv://yashkelhe01:cloPgLsFBjKvCpeF@newclustor.jud0fag.mongodb.net/userNew").then(()=>{
    console.log("the connection has been done for the mongodb")
}).catch(()=>{
    console.log("there is something up with the mongo connection")
}
)

const modul = mongoose.model("second_DB", {name : String , userName: String})


app.use(express.json())

app.post("/signUp", async (req, res )=>{ 

 const {name, userName} = req.body
 try{

 
    const existOne=  await modul.findOne({name : name , userName : userName})

    if(existOne){
       return  res.status(400).send("the user is already exist")
    }

    const user = new modul({
        name: name,
         userName: userName
    })
    user.save()

    res.json ({msg : "done"})
}
catch(err)
{
    console.log(err)
}})




app.get('/:id', (req, res) =>{
    let n = req.params['id']
    console.log(n);
    res.render('index', { id: req.params['id'] });
});

app.get('/',  (req, res) =>{

    res.json( { id: 'id' });

});

app.listen(3000, () => {
    console.log("Connection is established on port 3000");
});
