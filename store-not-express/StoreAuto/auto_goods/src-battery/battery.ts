import "./style.css";
import {create_breadcrumbs} from "../../function/function.js"
create_breadcrumbs();
const array_goods = document.getElementById("list-goods-akb-id");
for(let i = 0; i < 5; i++){
let t = document.createElement('div');
t.textContent = `t = ${i + 1}`;
array_goods?.append(t);
}


