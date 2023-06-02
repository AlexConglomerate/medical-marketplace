import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: null,
}

// прописываем алгоритм: при каком action как менять состояние
const mySlice = createSlice({
    name: 'user', // первое слово в названии action + '/'
    initialState,
    reducers: {
        setData: (state, {payload}) => {
            state.users = payload
            return state
        },
    }
})

const {actions, reducer: userReducer} = mySlice
const {setData} = actions
export const actionUser = {setData}

export const getUserInfo = () => async (dispatch) => {
    try {
        const {data} = await axios.get('https://randomuser.me/api/?results=30');
        console.log(`data.results`, data.results)
        dispatch(setData(data.results))
    } catch (error) {
        console.log(error);
    }
}

// прописываем функцию, через которую будем считывать state
export const getUser = () => state => {
    return state.user
}

export default userReducer