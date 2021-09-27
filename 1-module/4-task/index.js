function checkSpam(str) {
  // ваш код...
  str.toLowerCase();
  let str1 = '1xBet'.toLowerCase();
  let str2 = 'XXX'.toLowerCase();
  if ( str.includes(str1) || str.includes(str2) ){
    return true;
  }
  return false;
}