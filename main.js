const fs = require('fs');
const makeArray = require('./modules/makeArray');
const whiteSpace = require('./modules/whiteSpace');
const dest = require('./modules/destination');

function main() {
  var kontrahenci =  makeArray('./txt/kontrahenci.txt');
  for (var i = 0; i < kontrahenci.length; i++) {
    this.length = kontrahenci[i][1].length;
    // console.log(this.length);
    for (var j = 0; j < this.length; j++) {
      kontrahenci[i][1] = kontrahenci[i][1] + ' ';
    };
    var outputfile = kontrahenci[i][0]+' '+kontrahenci[i][1]+' '+kontrahenci[i][2]+' '+kontrahenci[i][2]+' '+kontrahenci[i][3]+' '+kontrahenci[i][4]+'\n';
    dest('./output/kontr.txt', outputfile);
  };
};

main();