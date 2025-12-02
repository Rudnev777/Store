import "./style.css";

const array_goods = document.getElementById("list-goods-akb-id");
for(let i = 0; i < 5; i++){
let t = document.createElement('button');
t.textContent = `t = ${i + 1}`;
array_goods?.append(t);
}