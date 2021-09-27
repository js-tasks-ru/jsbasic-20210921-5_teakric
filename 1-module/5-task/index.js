function truncate(str, maxlength) {
  // ваш код...
  if ( str.lenght <= maxlength ){
    return str;
  } else {
    return `${str.slice( 0, --maxlength )}…`;
  }
}
