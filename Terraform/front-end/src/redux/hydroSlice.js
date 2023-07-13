import {createSlice} from '@reduxjs/toolkit'
import Mock from '../pictures/mock.js'

export const hydroSlice = createSlice({
    name: 'hydros',
    initialState:{
        models: [{name:'basic', price: 400, pic: Mock},{name:'extendible', price:500, pic: Mock},{name:'duly', price: 700, pic: Mock}]
    }
})