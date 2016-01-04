//Load Express Framework
var express = require('express');

//Load Mustache Template Engine
var mustachex = require('mustachex');

//Load Oracle
var oracledb = require('oracledb');

//Call express
var app = express();

var bodyParser = require('body-parser');

var orawrap = require('orawrap');
var dbConfig = {
    user: 'kxm152630',
    password: '123456',
    connectString: 'csoracle.utdallas.edu/student.csoracle.utdallas.edu',
    poolMax: 20,
    poolMin: 2,
    poolIncrement: 2,
    poolTimeout: 10
};

//Set Global App Settings
app.engine('html', mustachex.express);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



//Query2
app.get('/query2noind', function(req, res) {
  res.render('domain.html');
});


app.post('/result', function(req, res) {

 var domain_name = req.body.name;
 var sql_statement = "select Domain,GlobalRank from majestic where TLD='"+domain_name+"'";

 orawrap.execute(
         sql_statement,{},{maxRows:1000000},
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
               {
                 Domain:result.rows
               }
               );
             }
             else {
               res.render('error',
               {
                  message: "Not available"

               }
               );
             }
           }
        }
 );
});





//Query2 index1

app.get('/query2index1', function(req, res) {
  res.render('query2_index1.html');
});


app.post('/query2index1result', function(req, res) {

var domain_name = req.body.Domain;
var sql_statement = "select Domain,GlobalRank from majestic_index1 where TLD='"+domain_name+"'";



 orawrap.execute(
         sql_statement,{},{maxRows:1000000},
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
               {
                  Domain:result.rows
               }
               );
             }
             else {
               res.render('error',
               {
                  message: "not available"

               }
               );
             }
           }
        }
 );
});


//Query2 index2



app.get('/query2index2', function(req, res) {
  res.render('query2_index2.html');

});


app.post('/query2index2result', function(req, res) {
var domain_name = req.body.name;
var sql_statement = "select Domain,GlobalRank from majestic_index2 where TLD='"+domain_name+"'";

 orawrap.execute(
         sql_statement,{},{maxRows:1000000},
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
               {
                  Domain:result.rows
               }
               );
             }
             else {
               res.render('error',
               {
                  message: "not available"

               }
               );
             }
           }
        }
 );
});




//Query3index3


app.get('/query2index3', function(req, res) {
  res.render('query2_index3.html');
});



app.post('/query2index3result', function(req, res) {

var domain_name = req.body.name;
var sql_statement = "select Domain,GlobalRank from majestic_index3 where TLD='"+domain_name+"'";

 orawrap.execute(
         sql_statement,{},{maxRows:1000000},
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
               {
		 Domain:result.rows              
		 }
               );
             }
             else {
               res.render('error',
               {
                  message: "not available"

               }
               );
             }
           }
        }
 );
});




//Query1

app.get('/query1/noind', function(req, res) {
  res.render('query1.html');
});


app.post('/query1result', function(req, res) {

 var domain_name = req.body.name;
 var sql_statement = "select GlobalRank from majestic where domain='"+domain_name+"'";

 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
               {
                Domain:result.rows
               }
               );
             }
             else {
               res.render('error',
               {
                  message: "not available"

               }
               );
             }
           }
        }
 );
});





//Query1index1



app.get('/query1/ind1', function(req, res) {
  res.render('query1_index1.html');
});


app.post('/query1index1result', function(req, res) {

var domain_name = req.body.name;
   var sql_statement = "select GlobalRank from majestic_index1 where domain='"+domain_name+"'";

 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
               {
           Domain:result.rows

               }
               );
             }
             else {
               res.render('error',
               {
                  message: "not available"

               }
               );
             }
           }
        }
 );
});




//Query1index2

app.get('/query1/ind2', function(req, res) {
  res.render('query1_index2.html');
});

app.post('/query1index2result', function(req, res) {

   var domain_name = req.body.name;
   var sql_statement = "select GlobalRank from majestic_index2 where domain='"+domain_name+"'";

 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
               {
           	Domain:result.rows

               }
               );
             }
             else {
               res.render('error',
               {
                  message: "No books with such name"

               }
               );
             }
           }
        }
 );
});


//Query1index3

app.get('/query1/ind3', function(req, res) {
  res.render('query1_index3.html');
});


app.post('/query1index3result', function(req, res) {

   var domain_name = req.body.name;
   var sql_statement = "select GlobalRank from majestic_index3 where domain='"+domain_name+"'";



 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) {
              console.error(err);
              res.render('error',
                {
                  message: err.message
                }
              );

           }
           else {
             if (result.rows.length >0) {
               res.render('result',
                {
            Domain:result.rows

               }
               );
             }
             else {
               res.render('error',
               {
                  message: "not available"

               }
               );
             }
           }
        }
 );
});








//Create Server
var port = Number(process.env.PORT || 5020);
orawrap.createPool(dbConfig, function(err, pool) {
   // The pool that was created is provided in the callback function,  
   // but it's rarely needed as it's stored within orawrap for use later 
   if (err) throw err;
   //Start the web server now that the pool is ready to handle incoming requests 
   app.listen(port, function() {
       console.log('Web server listening on localhost: 5000');
   });
});
