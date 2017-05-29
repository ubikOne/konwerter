const fs = require('fs');

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

function makeArray(src) {
  this.inputArray = [];
  this.outputArray = [];
  this.source = fs.readFileSync(src).toString().split('\n'||'\r');
  for (var i = 0; i < this.source.length; i++) {
    this.inputArray[i] = new Array(this.source[i]);
  };
  for (var i = 0; i < this.source.length; i++) {
    this.outputArray[i] = this.inputArray[i].toString().split(',');
  };
  return this.outputArray;
};

function whiteSpace(count) {
  this.space = ' ';
  for (var i = 0; i < count; i++) {
    this.space = this.space + ' ';    
  };
  return this.space;
};

function dest(dest, text) {
  this.destFile = fs.appendFile(dest, text, (err) => {
    if (err) {
      console.log(err);
    };
  });
};

function input(name, src) {
  name = fs.readFileSync(src).toString().split('\n'||'\r');
  return name;
}