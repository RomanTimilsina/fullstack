import  express  from "express";
import mysql from 'mysql2';

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Rom@n2053",
  database:"test"
})

app.use(express.json())

app.get('/', (req,res) => {
  res.json("hello")
})

app.get('/books', (req,res)=> {
  const q = 'SELECT * FROM test.books;'
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.post('/books', (req,res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover
  ]   

  db.query(q,[values],(err,data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.listen(8801, () => {
  console.log("Connected to backend!")
})

