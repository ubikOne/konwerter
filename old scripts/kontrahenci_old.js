const fs = require('fs');
const Pars = require('node-dbf');

var kontrahenci = new Pars('./dbf/KONTRAH.DBF');

kontrahenci.on('start', (p) => {
  console.log('Rozpoczęto parsowanie pliku');
});

kontrahenci.on('header', (h) => {
  console.log('Parsownaie nagłówków pliku zostało zakończone');
});

kontrahenci.on('record', (record) => {
  
  function kontrahenci(cnazwa) {

    this.kontrahent = record.NAZPKONTR.toUpperCase();
    this.length = this.kontrahent.length;
    this.licznik = cnazwa;

    if (this.length > this.licznik){
      dest('./log/kontrahenci.txt', 'Kontrahent o za długiej nazwie:'+'\n'+this.kontrahent+'\n');
      this.kontrahent = this.kontrahent.slice(0, this.licznik);
    };

    this.spaceLeft = this.licznik - this.length;

    for (var i = 0; i < this.spaceLeft; i++) {
      this.kontrahent = this.kontrahent + ' ';    
    };
    return this.kontrahent;
  };
  
  function adres(cadres) {
    
    this.adres = record.INFO.toUpperCase() +' '+ record.KOD_MIASTO.toUpperCase();
    this.length = this.adres.length;
    this.licznik = cadres;

    if (this.length > this.licznik){
      dest('./log/adresy.txt', 'Kontrahent o za długim adresie:'+'\n'+this.kontrahent+'\n');
      this.adres = this.adres.slice(0, this.licznik);
    };

    this.spaceLeft = this.licznik - this.length;

    for (var i = 0; i < this.spaceLeft; i++) {
      this.adres = this.adres + ' ';    
    };
    return this.adres;
  };

  function nip(cnip) {

    this.nip = record.NIP;
    this.length = this.nip.length;
    this.licznik = cnip;

    if (this.length != this.licznik) {
      dest('./log/nip.txt', 'Kontrahent o błędym NIP-ie:'+'\n'+this.kontrahent+' '+this.nip+'\n');
      this.nip = whiteSpace(13);
    };
    return this.nip
  };

  function plVat() {
    this.vat = record.PLVAT;
    if (this.vat != 'T') {
      this.vat = 0;
      dest('./log/platnik_vat.txt', 'Kontrahent nie jest płatnikiem vat:'+'\n'+this.kontrahent+'\n');
    } else {
      this.vat = 1;
    };
    return this.vat;
  };

  function dest(dest, text) {
    this.destFile = fs.appendFile(dest, text, (err) => {
      if (err) {
        console.log(err);
      };
    });
    
    return this.destFile;
  };

  function whiteSpace(cspace) {
    this.space = ' ';
    for (var i = 0; i < cspace; i++) {
      this.space = this.space + ' ';    
    };
    return this.space;
  };
  
  var outputData = {
    kod: record.KOD_KONTR,
    kontrahent: kontrahenci(100),
    adresy: adres(50),
    nipy: nip(13),
    vat: plVat()
  };

  var outputFile = '\t'+outputData.zero+outputData.spacja3+'\t'+outputData.kod+outputData.spacja10+'\t'+outputData.kontrahent+'\t'+outputData.adresy+'\t'+outputData.spacja60+'\t'+outputData.nipy+'\t'+outputData.vat+'\n';
  
  // console.log(outputFile)

  dest('./output/kontrahenci.txt', outputFile);
});

kontrahenci.on('end', (p) => {
  console.log('Zakończono tworzenie pliku wyjściowego')
  console.log('Zakończono parsowanie pliku');
})
 
kontrahenci.parse();