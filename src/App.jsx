
/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-19 15:27:14
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-05-12 15:13:40
 * @FilePath: /grocery/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import Form from './Form'
import { nanoid } from "nanoid";
import Items from "./Items";

const setLocalStorage=(items)=>{
  localStorage.setItem('list',JSON.stringify(items))
}
const defaultItems=()=>{
  return JSON.parse(localStorage.getItem('list')||[])
}
const App = () => {
  const [items,setItems]=useState(defaultItems)
  const addItem=(itemName)=>{
    const newItem={
      name:itemName,
      completed:false,
      id:nanoid()
    }
    const newItems=[...items,newItem]
    setItems(newItems)
    setLocalStorage(newItems)
  }
  const removeItem=(itemId)=>{
    const newItems=items.filter((item)=>{return itemId!==item.id})
    setItems(newItems)
    setLocalStorage(newItems)
  }
  const editItem=(itemId)=>{
    const newItems=items.map((item)=>{
      if (item.id===itemId){
        const newItem={...item,completed:!item.completed}
        return newItem
      }
      return item
    })

    setItems(newItems)
    setLocalStorage(newItems)
  }
  return (
    <section className="section-center">
      <Form addItem={addItem}/>
      <Items items={items}   removeItem={removeItem} editItem={editItem}></Items>
    </section>
  )
};

export default App;
