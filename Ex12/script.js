let a = document.getElementsByClassName("box")

function getRand(){
    let val1 = Math.ceil(0+(Math.random()*255));
    let val2 = Math.ceil(0+(Math.random()*255));
    let val3 = Math.ceil(0+(Math.random()*255));

    return `rgb(${val1},${val2},${val3})`;
}

Array.from(a).forEach((e)=>{
    e.style.backgroundColor = getRand();
})