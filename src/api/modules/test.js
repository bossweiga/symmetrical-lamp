import requset from '../request'
export default {
    getMsg:()=>requset.get('/photos'),
    getmd:()=>requset.get('/xp/ss')
}