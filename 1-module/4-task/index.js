function checkSpam(str) {
  // ваш код...
  str.toLowerCase();
  str1 = '1xBet'.toLowerCase();
  str2 = 'XXX'.toLowerCase();
  if ( str.includes(str1) || str.includes(str2) ){
    return true;
  }
  return false;
}