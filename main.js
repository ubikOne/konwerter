const fs          = require('fs');
const cptable     = require('codepage');
const makeArray   = require('./modules/makeArray');
const whiteSpace  = require('./modules/whiteSpace');
const dest        = require('./modules/destination');
const slicer      = require('./modules/slicer');
const chceck      = require('./modules/check');
const spacer      = require('./modules/spacer');
const exportData  = require('./scripts/exportData');
const dbfExtract  = require('./scripts/bdfExtract')

dbfExtract.kontrahenciExportDbf();
dbfExtract.artykulyExportDbf();
exportData.kontrahenci();
exportData.artykuly();