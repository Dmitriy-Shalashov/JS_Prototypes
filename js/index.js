'use strict';

function User(name, surname, age, isMale, email, isSubscribed) {
   this.firstName = name;
   this.lastName = surname;
   this.age = age;
   this.isMale = isMale;
   this.email = email;
   this.isSubscribed = isSubscribed;
}

const users = [];

// 1.1 Для примера с последней части занятия (https://github.com/pecourses/js-intro/blob/main/js/users.js) прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип.

const userProto = new User();
userProto.getFullName = function () {
   console.log(`${this.lastName} ${this.firstName}`);
}
User.prototype = userProto;



for (let i = 0; i < 100; i++) {
   const user = new User(
      `Username${i}`,
      `Usersurname${i}`,
      Math.floor(Math.random() * 90),
      Math.random() > 0.5,
      `useremail${i}@gmail.com`,
      Math.random() > 0.5,
   );
   users.push(user);
}
console.table(users);

// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).

const fullNameOfScoolgirls = users.filter(isFullNameOfScoolgirls);
function isFullNameOfScoolgirls(user) {
   return !user.isMale && user.age >= 6 && user.age <= 18;
}
console.table(fullNameOfScoolgirls);

// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com

console.log(users.some(emailTest));
function emailTest(user) {
   return user.email == 'useremail99@gmail.com';
}

// 1.4 Проверить, все ли пользователи подписаны (subscribed).

console.log(users.every(chekSubscribed));
function chekSubscribed(user) {
   return user.isSubscribed;
}