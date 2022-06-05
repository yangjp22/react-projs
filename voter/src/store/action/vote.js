import * as TYPE from '../action-types.js'


let vote = {
    support() {
        return {type: TYPE.VOTE_SUPPORT}
    },
    oppose() {
        return {type: TYPE.VOTE_AGAINST}
    },
    init(initData) {
        return {
            type: TYPE.VOTE_INIT,
            ...initData
        }
    }
}

export default vote