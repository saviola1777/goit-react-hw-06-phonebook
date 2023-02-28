import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import reducer from "./reducer";

const enhancer = devToolsEnhancer();

const store =createStore (reducer , enhancer)  // створюємо глобальне сходище яке називається сторе
export  default store



// createStore(reducer, preloadedState, enhancer)

// reducer - функція із логікою зміни стану Redux. Обов'язковий параметр.
// preloadedState - початковий стан програми. Це має бути об'єкт тієї ж форми, що й, як мінімум, частина стану. Необов'язковий параметр.
// enhancer - Redux DevTools. для того щоб в бпаузеоі бачити глобальний стан  за допомогою додатка 