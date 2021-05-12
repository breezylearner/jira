import { useEffect, useState } from 'react'

export const SearchPanel=()=>{
  // 使用reactHook 进行操作。编写的时候清楚自己想要什么状态
  const [param,setParam]=useState({
    name:'',
    personId:''
  })
const [users,setUsers]=useState([])
const [list,setList]=useState([])
// 在页面变化时，请求项目变化接口（通过传输不同的值，显示不同内容）
// 最后添加依赖，当param发生变化时获取。当param请求时，添加相应变化
useEffect(()=>{
  fetch('').then(async response=>{
    if(response.ok){
      // 如果ok，说明请求成功
      setList(await response.json())
    }
  })
},[param])

  return <form>
    <div>
      {/*等价于：  setParam(Object.assign({},param,{name:evt.target.value})) */}
      <input type="text" value={param.name} onChange={(evt)=>setParam({
        ...param,//解开当前的内容
        name:evt.target.value
      })}
      />

      {/* 创建下拉选择框，进行条件筛选 */}
      <select value={param.personId} onChange={(evt)=>setParam({
        ...param,//解开当前的内容
        personId:evt.target.value
      })}>
        <option value={''}>负责人</option>
        {/* 遍历展示users里面的内容 */}
        {
          users.map((user)=>{
            <optipn value={user.id}>{user.name} </optipn>
          })
        }
      </select>

      
    </div>
  </form>
}