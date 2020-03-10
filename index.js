const {Client}=require('pg')
const client = new Client({
    user:"postgres",
    password:"postgres",
    host:"192.168.0.111",
    port:5432,
    database:"posao"
    }
)

client.connect()
.then(()=> console.log("Conection succes!!!"))
.then(()=> client.query("select * from employees"))
.then(results =>console.table(results.rows))
.catch(e=> console.log(e))
.finally(()=>client.end())