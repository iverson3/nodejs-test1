
var fs = require('fs');

fs.readFile('test.js', (err, data) => {
    console.log(data.toString());
})

var str = fs.readFileSync('test.js');
console.log(str.toString());


var _ = require('underscore');
_.each([1, 2, 3, 4], (item, i) => {
    console.log(`${item} --- ${i}`)
})


var request = require('request');
request('https://www.baidu.com/img/bd_logo1.png').pipe(fs.createWriteStream('baidu.png'));

echo "khjhhghhj";