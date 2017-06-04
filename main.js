const exportData  = require('./scripts/exportData');
const dbfExtract  = require('./scripts/bdfExtract')

dbfExtract.kontrahenciExportDbf();
dbfExtract.artykulyExportDbf();
exportData.kontrahenci();
exportData.artykuly();