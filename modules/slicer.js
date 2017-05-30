module.exports = function(name, length, count) {
  if (length > count){
    name = name.slice(0, count);
  };
  return name;
};