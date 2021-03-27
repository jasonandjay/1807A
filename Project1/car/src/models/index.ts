import {HomeModelState} from './home'
import {DetailModelState} from './detail'

export interface IRootState{
    home: HomeModelState,
    detail: DetailModelState
}