const fs   = require('fs');
const Pars = require('node-dbf');

module.exports = {
  kontrahenciExportDbf: function() {
    var kontrahenci = new Pars('./dbf/KONTRAH.DBF');
    kontrahenci.on('start', (p) => {
      console.log('Rozpoczęto parsowanie pliku');
    });
    kontrahenci.on('header', (h) => {
      console.log('Parsownaie nagłówków pliku zostało zakończone');
    });
    kontrahenci.on('record', (record) => {      
      this.kod = record.KOD_KONTR;
      this.kontrahent = record.NAZPKONTR.toUpperCase();
      this.adres = record.INFO.toUpperCase() +' '+ record.KOD_MIASTO.toUpperCase();
      this.nip = record.NIP;
      this.vat = record.PLVAT;
      var outputFile = this.kod+','+this.kontrahent+','+this.adres+','+this.nip+','+this.vat+'\n';
      fs.appendFile('./txt/kontrahenci.txt', outputFile, (err) => {
        if (err) {
          console.log(err);
        };
      });
    });
    kontrahenci.on('end', (p) => {
      console.log('Zakończono tworzenie pliku wyjściowego')
      console.log('Zakończono parsowanie pliku');
    });    
    kontrahenci.parse();
  },
  artykulyExportDbf: function() {

  },
};
