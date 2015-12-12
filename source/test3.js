var users = [];

var signin = function(name, age);
if(!age) {
	console.log('가입실패! 나이가 존재하지 않습니다.');
	return;
}

var user = {name: name, age: age};
users.push(user);
}

var signout = function(neme) {
console.log('*******회원가입 현황********');
for(var i=0; i<users.length; i++){
console.log(users[i]);
   }
   console.log('*************************');
}

signin('a', 10);
signin('b', 10);
signin('c', 10);
signin('d', 10);

printUsers();