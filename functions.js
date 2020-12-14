 import fs from 'fs';
 import minimist from 'minimist';
 
 
 const args = minimist(process.argv.slice(2));
 let newList =[];
 let temp = readFile();


 function readFile(){
    let content = fs.readFileSync('todo-list.json', 'utf-8');
    let temp = JSON.parse(content);
    return temp;
 }

 function getList (number){
    
    
    temp.forEach((elem,i) => elem.status === true ? console.log(`${i + 1} - [${'x'}] ${elem.name}`) : console.log(`${i + 1} - [${' '}] ${elem.name}`));
    return temp;
 }
 

 function addNewItem (newItem){
    
    temp.push({"name": newItem, 'status': false});
    fs.writeFileSync('todo-list.json', JSON.stringify(temp, null, 2));
    console.log(newItem + '  hozzáadva');
    return temp;
     
    
 }
 
 function deleteItem (number){
    
    let index = number -1;
    temp.splice(index,1);
    fs.writeFileSync('todo-list.json', JSON.stringify(temp,null,2));
    return temp;
 }


 function checkStatus(number){
    
    let index = number-1;
    temp[index].status = true;
    fs.writeFileSync('todo-list.json', JSON.stringify(temp,null,2));
    console.log('Feladat végrehajtva');
    return temp;
 }

 export {readFile, getList, addNewItem, deleteItem, checkStatus};