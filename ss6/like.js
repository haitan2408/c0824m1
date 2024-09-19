// external
//   function: hàm
// addEventListener: lắng nghe sự kiện click.
// Khi sự kiện click xảy ra thì nó sẽ thực hiện function và hiển thị alert
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    btn.style.backgroundColor="blue";
    btn.style.color="white";
    btn.innerText="Unlike";
})

/*
document.getElementById("text").addEventListener("click", function () {
    alert("hi")
})
*/


let a = +prompt("a")
console.log(a)
let b = +prompt("b")
console.log(b)
alert(a + b)







