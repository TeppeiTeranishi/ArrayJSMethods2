const people = [
    {name: 'Cristiano', year: 1985},
    {name: 'Messi', year: 1987},
    {name: 'Giggs', year: 1973},
    {name: 'Rooney', year: 1985}
];

const comments = [
    {text: 'Programming!', id: 523423},
    {text: 'Pround', id: 823423},
    {text: 'One of the best of the best', id: 2039842},
    {text: 'All I do is win!', id: 123523},
    {text: 'I will lose to no one!', id: 542328}
];

/*
some and every checks
Array.prototype.some() //is at least one person 19?
const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19){
        return true;
    }
});
*/

const isAdult = people.some(person => ((new Date()).
getFullYear()) - person.year >= 19);
console.log({isAdult});
//Array.prototype.every() //is everyone 19?

const allAdults = people.every(person => ((new Date()).
getFullYear())- person.year >= 19);
console.log({allAdults});

/*
Array.prototype.find()
Find is like filter, but instead returns just the one you are looking for
find the comment with ID of 823423 
*/

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

/*
Array.prototype.findIndex()
Find the comment with this ID
delete the comment with the ID of 823423
*/
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

//comments.slipe(index, 1);
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];