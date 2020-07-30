const express = require('express');

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/appointments', (req, res) => {
    // Mock connect with database and select the data
    let appointments = [
        {
          id: 1,
          name: 'Friedrich Heinrich',
          phone: '+49 146 344 23811',
          email: 'Friedrich.heinrich@gmail.com',
          date: '22 JULY 14:00'
        },
        {
          id: 2,
          name: 'Hans Ulrich',
          phone: '+49 146 344 23811',
          email: 'Hans-Ulrichh@gmail.com',
          date: '22 JULY 14:00'
        },
        {
          id: 3,
          name: 'Karlheinz Brandenburg',
          phone: '+49 146 344 23811',
          email: 'karlheinzbrandenburg@gmail.com',
          date: '22 JULY 14:00'
        },
    ];
    setTimeout(() => res.send(appointments), 1000);
    
})

app.get('/properties', (req, res) => {
    // Mock connect with database and select the data
    let properties = [
        {
          id: 1,
          name: 'Maxmillian Von Mustermann',
          phone: '+49 146 344 23811',
          email: 'max.mustermann@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 2,
          name: 'Bernhard Weiß',
          phone: '+49 146 344 23811',
          email: 'bernhard.weiß@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 3,
          name: 'Hansjörg Felmy',
          phone: '+49 146 344 23811',
          email: 'Hansjörg.felmy@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 4,
          name: 'Gottschalk Godeslack',
          phone: '+49 146 344 23811',
          email: 'gottschalk.godeslack@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 5,
          name: 'Ekkehard Hardy',
          phone: '+49 146 344 23811',
          email: 'ekkehard.hardy@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
    ];

    if(req.query.search){
        let filter = properties.filter(p => 
            p.name.toLowerCase().includes(req.query.search.toLowerCase()) ||
            p.email.toLowerCase().includes(req.query.search.toLowerCase())
        )
        return res.send(filter);
    }

    setTimeout(() => res.send(properties), 1500);

    // Fake error in server
    // setTimeout(() => res.sendStatus(500), 2000)
    
    
})

const PORT = 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));