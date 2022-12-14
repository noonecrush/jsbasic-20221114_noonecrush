function makeFriendsList(friends) {
  let ulElement = document.createElement('ul');
  friends.forEach((item) => {
    let li =  document.createElement('li');
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    ulElement.append(li);
  });
  return ulElement;
};
