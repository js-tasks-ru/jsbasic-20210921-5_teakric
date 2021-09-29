function factorial(n) {
  // ваш код...

  let total = 1;

  while ( n > 1 ){

    total *= n--;
  }
  return ( total );
}