//step 1
function filterOut (value){
    return value.name ==='ford'
}

let newArr = [
    {name:"chevy", count: 2},
    {name:"ford", count: 5},
    {name:"acura", count: 3},
    {name:"honda", count: 16}
].filter(filterOut);

console.log(newArr);

//step 2

const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const addNewStudents = [...arr, ...newStudents];