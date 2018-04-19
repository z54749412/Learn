var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');


var app = express();

app.get('/', function(req, res, next){
    superagent.get('http://www.sina.com.cn/').end(function(err, sres){
        if(!err){
            var $ = cheerio.load(sres.text);
            var items = [];
            $('.nav-mod-1 a').each(function(index, item){
                var $element = $(item);
                items.push({
                    href: $element.attr('href')
                });
            });
            res.send(items);
        }
    });
});


app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
