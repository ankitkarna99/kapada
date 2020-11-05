// Consider the following snippet:
let notifications = [
{message: 'Lorem', read: true},
{message: 'Ipsum', read: true},
{message: 'Dolor', read: true},
{message: 'Sit', read: true},
{message: 'Amet', read: true}
];
let allRead = notifications.findIndex(notification => notification.read === false) === -1;
console.log(allRead);

// You have to set the allRead variable to false using a built-in higher-order function on the
// notifications array. Conditions: a) You cannot use for, while, do-while loops b) You cannot use
// forEach(), map(), reduce(), filter().