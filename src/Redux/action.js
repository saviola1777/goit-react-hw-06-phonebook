import { ADD_CONTACTS , DELETE_CONTACT } from "./types"
import { nanoid } from "nanoid"

export const addContact = payload =>{
   return{
      type:ADD_CONTACTS ,
      payload:{
         id:nanoid() ,
         ...payload
      } ,
}}

export const deleteCantacts = payload =>{
   return{
      type:DELETE_CONTACT,
      payload ,
   }
 }

// action функція яка подлучає payload(з чим треба виконати якусб дію) і повертати обєкт з двома свойствами type (що зробити) і payload (з чим зробити  )
//type:ADD_CONTACTS ,  ===перше свойство що зробити ADD_CONTACT імпортували з ./types  і потбібно const ADD_CONTACTS='contacts/add' добавити контакти 
// 