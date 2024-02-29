const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
const userModel = require('./userModel/user');

connectDB();
// app.set('view engine', 'ejs'); 

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// const saltRounds = 10;

// async function hashPassword(password) {
//     return await bcrypt.hash(password, saltRounds);
//   }
  
  // During user signup
  
  
  

  
app.get('/', (req, res) => {
      res.redirect('/Home'); // This redirect could be removed if needed
});
app.get('/login', (req, res) => {
    res.redirect('/login'); // This redirect could be removed if needed
});


app.post('/api/signup', async (req, res) => {
    
    try {
        await userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ success: true, message: 'Signup successful!' });

  } catch (error) {
    console.error('Signup Failed:', error);
    res.status(500).json({ error: 'Signup Failed' });
  }
});


app.get('/api/login',async (req,res)=>{
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ success: true, message: 'Login successful!' });
  } catch (error) {
    console.error('Login Failed:', error);
    res.status(500).json({ error: 'Login Failed' });
  }
})

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
