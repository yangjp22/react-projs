import * as TYPES from '../action-types.js'

let todo = {
    add(payload) {
        return {
            type: TYPES.TODO_ADD,
            payload
        }
    },

    //=> 修改或更新筛选类别
    //=> text: ALL/COMPLETE/UNCOMPLETE
    filter(text) {
        return {
            type:TYPES.TODO_FILTER,
            text
        }
    },

    //=> 更新指定任务的状态信息
    updateState(taskId, newState) {
        return {
            type: TYPES.TODO_UPDAT_STATE,
            taskId,
            newState
        }
    },

    remove(taskId) {
        return  {
            type: TYPES.TODO_DELETE,
            Id: taskId
        }
    }
}

export default todo