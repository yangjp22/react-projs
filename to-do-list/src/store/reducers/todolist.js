import * as TYPES from '../action-types.js'

function reducer(state = {
    data: [{
        name: 'Homework assignment',
        id: 1,
        state: 0
    },{
        name: 'Propose two solutions',
        id: 2,
        state: 0
    },{
        name: 'Analysis results',
        id: 3,
        state: 1
    },{
        name: 'Update settings',
        id: 4,
        state: 0
    },{
        name: 'Research',
        id: 5,
        state: 1
    }],
    flag: 'all'
}, action) {
    //=> 先修改原来的state
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        //=> adding an item
        case TYPES.TODO_ADD:
            //=> payload 即为传递进来需要增加的信息 
            let {payload} = action
            payload.id = state.data.length === 0 ? 1 : (parseFloat(state.data[state.data.length-1]['id']) + 1)
            state.data.unshift(payload)
            break
        
        //=> 更新筛选方式
        case TYPES.TODO_FILTER: 
            state.flag = action.text
            break 

        //=> 修改任务状态
        case TYPES.TODO_UPDAT_STATE:
            let {taskId, newState} = action
            let item = state.data.find(item => item.id === taskId)

            //=> 找到就更新
            if (item) {
                item.state = newState
            }
            break
            
        //=> 删除指定的数据
        case TYPES.TODO_DELETE:
            let {Id} = action
            console.log(Id)
            state.data = state.data.filter(item => 
                {   
                    return item.id !== Id
                })
            break
        default:
    }
    return state
}

export default reducer