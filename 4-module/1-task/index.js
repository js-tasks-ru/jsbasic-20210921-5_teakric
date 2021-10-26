function makeFriendsList(friends) {
  // ваш код...
  const friendsList = document.createElement('UL');

  for (let item of friends) {
    friendsList.insertAdjacentHTML('beforeEnd', `<li>${item.firstName} ${item.lastName}</li>`);
  }
  return friendsList;
}
