
let date = new Date()
let yearChanger = document.getElementById('yearChanger')

let count = 1
function runfn(element){
    if (winner = check()) {
        Swal.fire({
            position: "center",
            title: winner + " has won the game",
        }).then(() => {
            resetGame();
        });
        return true;
    }
    if(count%2 !== 0){
        element.innerHTML = "❌"
        count++
    }
    else{
        element.innerHTML = "⭕"
        count++
    }
    if(count===10){
        Swal.fire({
            position: "center",
            title: "It's a draw", 
        });
    }
    
}


function check(){
    d1=div1.innerHTML
    d2=div2.innerHTML
    d3=div3.innerHTML
    d4=div4.innerHTML
    d5=div5.innerHTML
    d6=div6.innerHTML
    d7=div7.innerHTML
    d8=div8.innerHTML
    d9=div9.innerHTML
    if(d1===d2 && d2===d3 && d1 != "" && d2 != "" && d3 != ""){
        return d1
    }else if(d4===d5 && d5===d6 && d4 != "" && d5 != "" && d6 != ""){
        return d4
    }else if(d7===d8 && d8===d9 && d7 != "" && d8 != "" && d9 != ""){
        return d7
    }else if(d1===d4 && d4===d7 && d1 != "" && d4 != "" && d7 != ""){
        return d1
    }else if(d2===d5 && d5===d8 && d2 != "" && d5 != "" && d8 != ""){
        return d2
    }else if(d3===d6 && d6===d9 && d3 != "" && d6 != "" && d9 != ""){
        return d3
    }else if(d1===d5 && d5===d9 && d1 != "" && d5 != "" && d9 != ""){
        return d1
    }else if(d3===d5 && d5===d7 && d3 != "" && d5 != "" && d7 != ""){
        return d3
    }

}
function RESTART(){
    location.reload()
}