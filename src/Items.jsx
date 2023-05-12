/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-05-12 08:32:42
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-05-12 15:08:59
 * @FilePath: /grocery/src/Items.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SingleItem from "./SingleItem"
const Items=({items,removeItem,editItem})=>{
  return (
    <div className="items">
    {items.map((item)=>{
      return <SingleItem item={item} key={item.id} removeItem={removeItem} editItem={editItem}></SingleItem>
    })}
    </div>
  )
  
}
export default Items