const findTheOldest = function(people) {
    return people
            .reduce((oldest, current) => {
                if (!oldest.yearOfDeath) {
                    oldest.yearOfDeath = new Date().getFullYear();
                }
                if (!current.yearOfDeath) {
                    current.yearOfDeath = new Date().getFullYear();
                }
                const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
                const currentAge = current.yearOfDeath - current.yearOfBirth;

                return oldestAge > currentAge ? oldest : current;
            });
};

// Do not edit below this line
module.exports = findTheOldest;
