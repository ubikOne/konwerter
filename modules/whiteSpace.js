module.exports = function(count) {
  this.space = ' ';
  for (var i = 0; i < count; i++) {
    this.space = this.space + ' ';    
  };
  return this.space;
};