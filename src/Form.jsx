import { useState } from "react"

/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-05-12 08:07:26
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-05-12 08:29:03
 * @FilePath: /grocery/src/Form.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Form=({addItem})=>{
  const [newItem,setNewItem]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (!newItem)return;
    addItem(newItem)
    setNewItem('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>GROCERY BUD</h4>
      <div className="form-control">
        <input type="text" value={newItem} className="form-input" onChange={(e)=>setNewItem(e.target.value)}></input>
        <button type="submit" className="btn">submit</button>
      </div>
    </form>
  )
}
export default Form