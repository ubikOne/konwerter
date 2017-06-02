const fs         = require('fs');
const cptable    = require('codepage');
const makeArray  = require('../modules/makeArray');
const whiteSpace = require('../modules/whiteSpace');
const dest       = require('../modules/destination');
const slicer     = require('../modules/slicer');
const chceck     = require('../modules/check');
// const spacer     = require('../modules/spacer');

module.exports = {
  kontrahenci: function() {
    var kontrahenci =  makeArray('./txt/kontrahenci.txt');
    kontrahenci.length = kontrahenci.length - 1;
    for (var i = 0; i < kontrahenci.length; i++) {
      this.countName = 100;
      this.countAdress = 50;
      this.countNip = 13
      this.lengthName = kontrahenci[i][1].length;
      this.lengthAdress = kontrahenci[i][2].length;
      this.lengthNip = kontrahenci[i][3].length;
      chceck('./log/nazwa.txt', 'Kontrahent o zbyt długiej nazwie: '+kontrahenci[i][1]+'\n', this.lengthName, this.countName);
      chceck('./log/adres.txt', 'Kontrahent o zbyt długim adresie: '+kontrahenci[i][1]+' '+kontrahenci[i][2]+'\n', this.lengthAdress, this.countAdress);
      if (this.lengthNip != this.countNip) {
        dest('./log/nip.txt', 'Kontrahent o nie prawidłowym nipie: '+kontrahenci[i][1]+' '+kontrahenci[i][3]+'\n')
      };
      slicer(kontrahenci[i][1], this.lengthName, this.countName);
      slicer(kontrahenci[i][2], this.lengthAdress, this.countAdress);
      // spacer(kontrahenci[i][1], this.countName, this.lengthName);
      for (var j = 0; j < this.countName - this.lengthName; j++) {
        kontrahenci[i][1] = kontrahenci[i][1] + ' ';
      };
      // spacer(kontrahenci[i][2], this.countAdress, this.lengthAdress)
      for (var j = 0; j < this.countAdress - this.lengthAdress; j++) {
        kontrahenci[i][2] = kontrahenci[i][2] + ' ';
      };
      if (this.lengthNip != this.countNip) {
        kontrahenci[i][3] = whiteSpace(12);
      };
      if (kontrahenci[i][4] == 'T') {
        kontrahenci[i][4] = 1;
      } else {
        kontrahenci[i][4] = 0;
      }
      var outputfile = '\t'+0+whiteSpace(3)+'\t'+kontrahenci[i][0]+whiteSpace(10)+'\t'+kontrahenci[i][1]+'\t'+kontrahenci[i][2]+'\t'+whiteSpace(60)+'\t'+kontrahenci[i][4]+'\t'+kontrahenci[i][3]+'\n';
      dest('./output/kontr.txt', outputfile);      
    };
  },
  artykuly: function() {
    
  },
};