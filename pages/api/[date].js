export default function handler(req,res){
    console.log(req.query)
    let {date} = req.query
    date = /\d{13}/.test(date)?new Date(parseInt(date)):new Date(date)
   //  console.log(date)
    if (date.toString() === 'Invalid Date'){

     return res.json({ error : "Invalid Date" })

   }
   res.json({unix:date.valueOf() ,utc:date.toUTCString()})
}
