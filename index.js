const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World now!')
})
app.get('/about',(req, res)=>{
res.send("about page now active")
})
app.get('/contact', (req, res)=>{
    res.send('<h1>this is contact page </h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})