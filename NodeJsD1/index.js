
// const fs = require('fs');
// const [, , command, ...args] = process.argv;
// if (command === "create") {
//     const title = args.join(' ');
//     let todos = [];
   
//         const data = fs.readFileSync('./todo.json', { encoding: 'utf8' });
//         todos = JSON.parse(data);
//     let id = 0;
//     todos.forEach(todo => {
//         if (todo.id > id) {
//             id = todo.id;
//         }
//     });
//     id++;
//     todos.push({ id, title });
//     fs.writeFileSync("./todo.json", JSON.stringify(todos, null, 2));
// }else if (command =="list"){
//     let todos=json.parse(fs.readFileSync('./todo.json',{encoding:'utf8'}))

// }else if (command == "update"){
//     let [,,,oldTitle,newTitle]=process.argv
//     let todos=json.parse(fs.readFileSync('./todo.json',{encoding:'utf8'}))
//    let founddata=todos.find((ele)=>{
//     return ele.title==oldTitle
//    })
//   founddata.title=newTitle
//   fs.writeFileSync("./todo.json", JSON.stringify(todos, null, 2));

// }




const fs = require('fs');
const [, , command, ...args] = process.argv;

if (command === "create") {
    const title = args.join(' ');
    let todos = [];
    let data;
        data = fs.readFileSync('./todo.json', { encoding: 'utf8' });
        todos = JSON.parse(data);
    let id = 0;
    todos.forEach(todo => {
        if (todo.id > id) {
            id = todo.id;
        }
    });
    id++;
    todos.push({ id, title });
    fs.writeFileSync("./todo.json", JSON.stringify(todos));
    console.log('Todo created:', { id, title });
} else if (command === "list") {
    let todos = [];
     let data = fs.readFileSync('./todo.json', { encoding: 'utf8' });
        todos = JSON.parse(data);
    
} else if (command === "update") {
    const id = parseInt(args[0]);
    const newTitle = args.slice(1).join(' ');
    let todos = [];
      let  data = fs.readFileSync('./todo.json', { encoding: 'utf8' });
        todos = JSON.parse(data);
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index].title = newTitle;
        fs.writeFileSync("./todo.json", JSON.stringify(todos));
     
    } 
}else if (command === "delete") {
    const id = parseInt(args[0]);
    let todos = [];
    let data = fs.readFileSync('./todo.json', { encoding: 'utf8' });
        todos = JSON.parse(data);
  
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        fs.writeFileSync("./todo.json", JSON.stringify(todos));
      
    } 
}











