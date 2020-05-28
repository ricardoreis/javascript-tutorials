let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

//console.log(activities[0][2]);

activities.forEach(activity => {
    let percentage = (activity[1]/24*100).toFixed();
    activity[2] = percentage +'%';
})


console.log(activities);

