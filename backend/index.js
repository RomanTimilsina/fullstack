import  express  from "express";
import mysql from 'mysql2';
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Rom@n2053",
  database:"test"
})

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
  const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover
  ]   

  db.query(q,[values],(err,data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.delete('/books/:id',(req,res) => {
  const bookId = req.params.id
  const q = 'DELETE FROM books WHERE id = ?'

  db.query(q,[bookId],(err,data) => {
    if(err) return res.json(err)
    return res.json("Book has been deleted successfully")
  })
})

app.listen(8801, () => {
  console.log("Connected to backend!")
})




