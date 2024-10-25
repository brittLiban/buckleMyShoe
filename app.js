const express = require('express');
const PORT = 3000;
const app = express();


app.use(express.urlencoded({ extended: false}));

//ejs
app.set('view engine', 'ejs');


app.get('/' , (req, res) => {
    res.render('home', {message:null});
})

function buckleConverter(number){
    if(number <= 2) {
        message = `buckle my shoe`;
    }
    else if(number == 3 || number == 4){
        message = `shut the door`;
    }
    else if(number == 5 || number == 6){
        message = `pick up the sticks`;
    }
    else if(number == 7 || number == 8){
        message = `lay them straight`;
    }
    else if(number == 9 || number == 10){
        message = `a big fat hen`;
    }

    return message;
}

app.post('/', (req, res) => {
    // if(req.body.number) {
    //     let number = req.body.number;
    //     res.render('home', {message: `You entered: ${number}`});
    // }
    let number = req.body.number;
    let message = buckleConverter(number);

    res.render('home', {message : message});
    
})

//cant forgot
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})



