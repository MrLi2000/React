// 从redux中导入createStore
import {createStore} from "redux"
// 导入创建的reducer
import { reducer } from "../reducer/reducer"
// 构建我们的store
export default createStore(reducer)