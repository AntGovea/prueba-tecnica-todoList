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
        <div className=' h-[90%]  w-full'>

            <div className='w-full  bg-black flex flex-wrap justify-evenly'>
                {
                    users.length ?
                        users.map((user: User) => {

                            return (
                                <div className='w-2/6 h-1/3 m-4 cursor-pointer 
                                flex flex-col bg-slate-300  rounded-3xl
                                 font-semibold text-center'
                                 
                                 key={user.userId} onClick={
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
