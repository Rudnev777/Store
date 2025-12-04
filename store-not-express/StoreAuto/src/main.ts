import './style.css'
import {create_breadcrumbs} from "../function/function.js"
import {fetchUsers} from "../connection-database.js"

create_breadcrumbs();
// Использование
fetchUsers().then(users => {
  console.log('Получен массив:', users);
});