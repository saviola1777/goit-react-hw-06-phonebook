import { ADD_CONTACTS, DELETE_CONTACT } from "./types";

const initialStore = {
   contacts: [],
   filter: ""
}

const reducer = (state = initialStore, action) => {  // створюємо редюсер яке повнртає початкове  значення де стейт це початкове значення  тобто те що зберігається в initialStore

   switch (action.type) {   // перевіряємо  action.type  
      case ADD_CONTACTS:   // якщо action.type   ===  ADD_CONTACTS
         const newContacts = [...state.contacts, action.payload];
         return { ...state, contacts: newContacts };
      case DELETE_CONTACT:
         const result = state.contacts.filter(item => item.id !== action.payload)
         return { ...state, contacts: result }
      default:
         return state

   }
}

export default reducer

// const reducer = (state = initialStore, action) =>  ===де action  payload з action.js тобто де є type і payload

