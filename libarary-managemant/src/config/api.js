import axios from 'axios'

export const api = axios.create({
    baseURL:"http://localhost:3000/api"
    
})

export const addData=async(data)=>{
    try {
        const res = await api.post('/user/register',data)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const loginupuser=async(data)=>{
    try {
        const res = await api.post('/user/login',data)
        console.log(res);
        return res.data
    } catch (error) {
        throw(error)
    }
}

export const getUser= async(token)=>{
    try {
        const res = await api.get('user/getuser',{
           headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
           }
        })
        return res.data
    } catch (error) {
        throw(error)
    }
}