import { useEffect, useState } from 'react'
import { getAllTodos, getDetailsTodo } from '../api/api'
import { User } from '../types/types'

export const TodoList = () => {


    const [users, setUsers] = useState<User[]>([])
    const [userId, setUserId] = useState(null)
    const [userDetails, setUserDetails] = useState(null)

    const getUsersForList = async () => {

        const resp = await getAllTodos();
        setUsers(resp.data)

    }

    const getDetails = async () => {
        const resp = await getDetailsTodo(userId || 0);
        setUserDetails(resp.data)
    }

    useEffect(() => {
        getUsersForList()
    }, [])

    return (
        <div className=' h-full  w-full bg-red-200 mt-8 '>

            <div className='w-full mx-auto bg-black py-8 flex flex-wrap'>
                {
                    users.length ?
                        users.map((user: User) => {

                            return (
                                <div className='w-3/6 h-full p-4 cursor-pointer flex flex-col bg-slate-300 m-4 rounded-3xl font-semibold ' key={user.userId} onClick={
                                    () => {
                                        setUserId(userId),
                                            getDetails()
                                    }
                                }>

                                    <p>{`userId:  ${user.userId}   `}</p>
                                    <p>{`id:  ${user.id}`}</p>
                                    <p>{`title:  ${user.title}`}</p>
                                    <p>{`completed:  ${user.completed}`}</p>

                                </div>
                            )
                        })

                        : null
                }
            </div>




        </div>
    )
}
