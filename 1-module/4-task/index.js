function checkSpam(str) {
  // ваш код...
  let str0 = str.toLowerCase();
  let str1 = '1xBet'.toLowerCase();
  let str2 = 'XXX'.toLowerCase();
  if ( str0.includes(str1) || str0.includes(str2)){
    return true;
  }
    return false;
  }