 'use strict'
 import minimist from 'minimist';
 import fs, { readFileSync } from 'fs';
 import {instructionMessage} from './get-messages.js';
 import {readFile, getList, addNewItem, deleteItem, checkStatus} from './functions.js';

 const args = minimist(process.argv.slice(2));

let temp = readFile();




 if (args._.length > 0|| !Object.keys(args).every(arg => ['_','l', 'a', 'r', 'c'].includes(arg))) {
     console.log('\nNem támogatott argumentum! \n');
     instructionMessage();
     

     
 }
 if (Object.keys(args).length === 0 ){

    instructionMessage();
    }
   

 if(args.l){
    
     if(temp.length > 0){
         getList();
        }else{
            console.log('Nincs mára tennivalód! :)');
        }
    }

 else if (args.a){
     if (args.a.length === undefined){
        console.log('Nem lehetéges új feladat hozzáadása:\nnincs megadva a feladat!');
     }else{
    addNewItem(args.a);
     }
    
 }
 
    
 else if(args.r){
    if (typeof args.r === 'number'){
     
        deleteItem(args.r);
    } 
    else if( number > temp.length){
        console.log('Nem lehetséges az eltávolítás: túlindexelési probléma adódott');
    }
  else if (args.r.length === undefined){
     console.log('Nem lehetséges az eltávolítás, nem adott meg indexet!');

 }
 else if (typeof args.r === 'string'){
     console.log('Nem lehetséges az eltávolítás: a megadott index nem szám!');
 }
}


else if(args.c){
    if(typeof args.c === 'number'){
        checkStatus(args.c);
    }
    else if(number > temp.length){
        console.log('Nem lehetséges a feladat végrehajtása: túlindexelési probléma adódott');
    }
 else if (args.c.length === undefined){
     console.log('Nem lehetséges a feladat végrehajtása: nem adtál meg indexet');
 }
 
 else if(typeof args.c === 'string'){
     console.log('Nem lehetséges a feladat végrehajtása: a megadott index nem szám.');
 }
 
}





