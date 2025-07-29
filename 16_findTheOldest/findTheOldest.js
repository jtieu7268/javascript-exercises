const findTheOldest = function(people) {
    return people.reduce((old, cur) => {
        let oldAge = getAge(old.yearOfBirth, old.yearOfDeath);
        let curAge = getAge(cur.yearOfBirth, cur.yearOfDeath);
        return oldAge > curAge ? old : cur; 
    });
};

function getAge(birth, death) {
    death = death === undefined ? (new Date()).getFullYear() : death;
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
