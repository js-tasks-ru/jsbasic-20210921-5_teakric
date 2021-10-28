function toggleText() {
  // ваш код...
  const btn = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  text.hidden = false;

  btn.addEventListener('click', onBtnClick);

  function onBtnClick() {
    if ( text.hidden == true ) {
      text.hidden = false; 
    } else {
      text.hidden = true;
    } 
  }
}
