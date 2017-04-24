/**
 * Created by tseian on 12/04/2017.
 */


var users = [
    {'user': 'barney', 'age': 36},
    {'user': 'fred', 'age': 40},
    {'user': 'pebbles', 'age': 18}
];

// var names = _.chain(users)
//     .map(function (user) {
//         return user.user;
//     })
//     .join(" , ")
//     .value();
// console.log(names);


// var youngest2 = _.chain(users)
//     .sortBy("age")
//     .map(function (user) {
//         console.log("map", user);
//         return user;
//     })
//     .first()
//     .value();
// console.log(youngest2);

// var userObj = _.chain(users)
//     .map(function(user){
//         return [user.user, user.age];
//     })
//     .value();
// console.log(userObj);