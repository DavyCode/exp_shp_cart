var Product = require('../models/product');
var mongoose = require('mongoose');
var secret = require('../config/secret')

const db = mongoose.connect(secret.database, function(err){
    (err)? console.log(err): console.log("seederproduct connected");
  });

var products = [
    new Product({
        imagePath:'images/shoe.PNG',
        title: 'Men Loafers',
        description: 'cool cool footware',
        price: 20
    }),
    new Product({
        imagePath:'images/shoe.PNG',
        title: 'Men Loafers',
        description: 'cool cool footware',
        price: 20
    }),
    new Product({
        imagePath:'images/shoe.PNG',
        title: 'Men Loafers',
        description: 'cool cool footware',
        price: 20
    }),
    new Product({
        imagePath:'images/shoe.PNG',
        title: 'Men Loafers',
        description: 'cool cool footware',
        price: 20
    }),
];

var done = 0;
for (var i = 0; i<products.length; i++)
    products[i].save((err, result) => {
        done++;
        if( done === products.length){
            exit();
        }
    })

function exit (){
    mongoose.disconnect();
}
