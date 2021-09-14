const todos = [
    {
        id: 1,
        title: 'Go to school',
        conmpleted: true
    },
    {
        id: 2,
        title: 'Go to museum',
        conmpleted: true
    },
    {
        id: 3,
        title: 'Go to school',
        conmpleted: false
    }
]

for(let i in todos){
    let todo = todos[i];
    if(todo.conmpleted === true){
        console.log(i, todo.title);
    }
}

for(let v of todos){
    let todo = v;
    if(todo.conmpleted === true){
        console.log(todo.title);
    }
}