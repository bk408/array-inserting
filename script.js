/* let data = [5, 96, 69, 28, 45, 36, 72]
let newEl = 19;
let position = 3;

console.log(data)

for(i= data.length-1; i>= 0; i-- ){
   
    if(i>=position){
        data[i+1]= data[i]
        
    }
    if(i==position){
        data[i] = newEl
    }
    console.log(data[i])

} */


function insEl(){
let data = [5, 96, 69, 28, 45, 36, 72]
let newEl = document.getElementById('newEl').value;
let position = document.getElementById('position').value;

console.log(data)

for(i= data.length-1; i>= 0; i-- ){
   
    if(i>=position){
        data[i+1]= data[i]
        
    
    if(i==position){
        data[i] = newEl
    }
}

}
}
