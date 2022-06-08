const mysql = require('mysql')
//Connection with DataBase
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'library',
  port: '3307'
});

//for connection check
connection.connect( (error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log("mysql database connected successfuly")
  }
})


module.exports = connection;