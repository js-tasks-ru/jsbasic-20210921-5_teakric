function getMinMax(str) {
  // ваш код...
  let arr =  str.split(' ')
           .filter( item => + item)
           .sort( (a, b) => a - b );
    return result = {
      min : + arr.shift(),
      max : + arr.pop()
    };
} 
