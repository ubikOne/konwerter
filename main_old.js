const fs = require('fs');

var inputFile = fs.readFileSync('./txt/wybb8_mazowia.txt').toString().toUpperCase();

var inputFileSplit = inputFile.split('\n'||'\r');

var inputArray = [];
var outputArray = [];

for (var i = 0; i < inputFileSplit.length; i++) {
  inputArray[i] = new Array(inputFileSplit[i]);
};

for (var i = 0; i < inputFileSplit.length; i++) {
  // outputArray[i] = inputArray[i].toString().split('\t');
  outputArray[i] = inputArray[i].toString().split('\n'||'\r');
};


console.log(outputArray)

fs.appendFile('./output/mazowia.txt', outputArray, (err) => {
      if (err) {
        console.log(err);
      };
    });
// console.log(outputArray[23].filter(item => item.trim() !== ''))

function kontrahenci(err) {
  for (var i = 0; i < inputFileSplit.length; i++) {
    if (outputArray[i][19] == 'PRAWDA') {
      outputArray[i][19] = 1;
    } else if (outputArray[i][19] != 'PRAWDA') {
      outputArray[i][19] = 0;
    } else if (outputArray[i][18] == 11) {
      outputArray[i][19] = 3;
    }

    var outputData = '\t'+'\t'+outputArray[i][0]+'\t'+outputArray[i][4]+'\t'+outputArray[i][10]+' '+outputArray[i][8]+'\t'+outputArray[i][19]+'\t'+outputArray[i][18]+'\t'+'\n';

    fs.appendFile('./output/tabela.txt', outputData, (err) => {
      if (err) {
        console.log(err);
      };
    });
  };
  if (err) {
    console.log(err);
  } else {
    console.log('Konwersja przebiegła pomyślnie');
    console.log('Plik znajduje się w katalogu output');
  }
};

// kontrahenci();

// console.log(outputArray[0][0])
// console.log(outputArray[2][0])
// console.log(outputArray[0][0].length)
// console.log(outputArray[0][0].charAt(0))
// console.log(outputArray[2][0].length)