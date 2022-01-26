import Axios from "axios"
import { Account } from "./Model"
import api from './assets/JsonData/api.json'

export const checkToken = async () => {
    if (localStorage.getItem('token-admin') === null || localStorage.getItem('token-admin') === undefined) return null
    let data
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset-UTF-8',
            "Accept": 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token-admin')}`
        }
    }
    
    await Axios.get(api.find(e => e.pages === 'Đăng nhập').api['check-token'], axiosConfig).then((response) => {
        let admin = new Account()
        admin.account = response.data.userName
        admin.avatar = response.data.image
        localStorage.setItem('admin',JSON.stringify(admin))
        if (response.status === 200)
            data = 1
        else data = 0
    })
    return data
}
