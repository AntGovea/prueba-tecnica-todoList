
import axios from 'axios';

export const getAllTodos = async () => {

    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)

        if (data.length) {
            return {
                valid: true,
                data,
                description: "success"
            }
        }
        else {
            return {
                valid: false,
                data: [],
                description: null
            }
        }

    } catch (error) {
        console.log(error)
        return {
            valid: false,
            data: null,
            description: error
        }
    }
}
export const getDetailsTodo = async (userId:number) => {

    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if (data.length) {
            return {
                valid: true,
                data,
                description: "success"
            }
        }
        else {
            return {
                valid: false,
                data: null,
                description: null
            }
        }

    } catch (error) {
        console.log(error)
        return {
            valid: false,
            data: null,
            description: error
        }
    }
}
