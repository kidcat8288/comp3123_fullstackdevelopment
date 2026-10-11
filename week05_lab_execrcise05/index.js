const express = require('express');
const app = express();
const path = require('path');

// Add User Router
const userRouter = require('./routes/users.js');

app.use(express.json());



/*
- Create new html file name home.html
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
userRouter.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../home.html'));
});

app.use('/api/v1/user', userRouter);
/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,res) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});


const Port=process.env.Port || 8081
app.listen(Port, () => {
  console.log('Web Server is listening at port ' + Port);
});

