//BOM, DOM & Window Object
//Snake,water And Gun Game
/*
The Game should Ask You to enter S, W or G. The Computer Should be able to randomly generate s, w, or g and declare Win or Loss Using alert. Use confirn and prompt wherever Required.
*/
let rando=Math.floor(Math.random()*3);
let cpu=['S','W','G'][rando]
let cond=true
while(cond){

let user=prompt("Enter S, W or G")
const match=(cpu,user)=>{
    if(cpu===user){
        return "Nobody! Match is Tied."
    }
    else if(cpu=== 'S' && user==='W'){
        return "CPU"
    }
    else if(cpu=== 'S' && user==='G'){
        return "USER"
    }
    else if(cpu=== 'G' && user==='W'){
        return "USER"
    }
    else if(cpu=== 'G' && user==='S'){
        return "CPU"
    }
    else if(cpu=== 'W' && user==='G'){
        return "CPU"
    }
    else if(cpu=== 'W' && user==='S'){
        return "USER"
    }
}
let result=match(cpu, user)
alert(`CPU:${cpu} and User:${user} \nThe Winner is:${result}`)
cond=confirm("Do You Want To Play Again?")
}