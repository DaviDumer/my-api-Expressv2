const users = {
  1: {
    id: 1,
    name: "usuario1",
    lastName: "segundo nome1",
    email: "email@test.com",
    password: "3146456" 
  },
  2: {
    id: 2,
    name: "usiario2",
    lastName: "segundo nome2",
    email: "email@test.com",
    password: "98653134" 
  },
  3: {
    id: 3,
    name: "usuaria3",
    lastName: "segundo nome3",
    email: "email@test.com",
    password: "987643" 
  }
};

const sequence = {
  _id: Object.values(users).length + 1,
  get id() {
    return this._id++;
  }
};

function getUsers() {
  return Object.values(users);
};

function getUser(id) {
  if(id){
    if(users[id]){
      return users[id];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

function setUser(user){
  user.id = sequence.id;
  users[user.id] = {...user};
  return user
};

function putUser(user){
  users[user.id] = {...user};
  return user
};

function deleteUser(id){
  if(id){
    const user = users[id];
    delete users[id];
    return user;
  }
};

module.exports = {
  getUsers,
  setUser,
  getUser,
  putUser,
  deleteUser
};