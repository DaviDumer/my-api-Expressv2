const users = {
  1: {
    id: 1,
    nome: "JAsinto1",
    userName: "@jasinto2",
    password: "123456" 
  },
  2: {
    id: 2,
    nome: "JAsinto2",
    userName: "@jasinto2",
    password: "123456" 
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

function deleteUser(id){
  if(id){
    const user = users[id];
    delete users[id];
    return user;
  }
}

function putUser(user){
  users[user.id] = {...user};
  return user
}


setUser({
  id: 2,
  nome: "JAsinto3",
  userName: "@jasinto3",
  password: "123456"
});
setUser({
  id: 2,
  nome: "JAsinto4",
  userName: "@jasinto4",
  password: "123456"
});

deleteUser(3);

setUser({
  id: 2,
  nome: "JAsinto5",
  userName: "@jasinto5",
  password: "123456"
});

putUser({
  id: 1,
  nome: "root",
  userName: "admin",
  password: "root"
});

console.log(getUser(3));
console.log(users);