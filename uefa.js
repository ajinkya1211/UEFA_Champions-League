let con = confirm('Do You Accept All The Terms & Conditions ?');
console.log(con);

function time() {
    let time = new Date();
    document.getElementById('time').innerHTML = time;
}
setInterval(time, 1000);

window.addEventListener('keydown',function run(event){
    console.log(event.code);
})

let search1=document.getElementById('search');
search1.addEventListener('click',function click(){
    console.log('Clicked the Search Button');
})
