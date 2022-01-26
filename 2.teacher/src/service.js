import Axios from "axios"
import api from './assets/JsonData/api.json'
import { Account } from "./Model"

export const checkToken = async () => {
    if (localStorage.getItem('token-teacher') === null || localStorage.getItem('token-teacher') === undefined) return null
    let data
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset-UTF-8',
            "Accept": 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token-teacher')}`
        }
    }
    await Axios.get(api.find(e => e.pages === 'Đăng nhập').api['check-token'], axiosConfig).then((response) => {
        let teacher = new Account()
        teacher.account = response.data.userName
        teacher.avatar = response.data.image
        localStorage.setItem('teacher', JSON.stringify(teacher))
        if (response.status == 200)
            data = 1
        else data = 0
    })
    return data
}
