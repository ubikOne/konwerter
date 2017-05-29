module.exports = function(name, src) {
  name = fs.readFileSync(src).toString().split('\n'||'\r');
  return name;
}