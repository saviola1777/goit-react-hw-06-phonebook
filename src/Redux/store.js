import { configureStore } from "@reduxjs/toolkit";  // експортує  футкцію яка буде огортати стор
import { persistStore } from "redux-persist";      // бібліотека яка запамятовує глобальний стан

import rootReducer from './root-reducer'


export const store = configureStore({
   reducer: rootReducer
})

export const persistor = persistStore(store)

// Redux Toolkit - це офіційна бібліотека для ефективної розробки з використанням Redux, яка призначена для стандартизації та спрощення написання логіки Redux.
// Redux Toolkit надає функцію configureStore(options), яка обертає оригінальний createStore(), єдиним аргументом очікує об'єкт параметрів та налаштовує деякі корисні інструменти  

//store-це  об'єкт, який містить повний стан програми, методи доступу до стану та відправлення екшенів. У програмі може бути лише один стор. 


