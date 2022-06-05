// 此文件就是创建store并导出

import {createStore} from 'redux'

import reducer from './reducer/index.js'

let store = createStore(reducer)

export default store