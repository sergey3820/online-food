import * as types from "../types";
import { IAllPizzasAction, IAllpizzasState } from "./reducerInterfaces/allPizzas.interface";

const initialState: IAllpizzasState = {
   allPizzas: [
       { id: 1, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ebf8b8670d6b4f078d9afa616d01202a_292x292.jpeg', price: 325, name: 'Сирный' },
       { id: 2, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg', price: 345, name: 'Ветчина и сыр' },
       { id: 3, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1df00c72-f3fd-4d4e-8537-3ff74035c2dc.jpg', price: 395, name: 'Пепперони' },
       { id: 4, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4518d232ca98422f876872b0fb2669a3_292x292.jpeg', price: 445, name: 'Цезарь' },
       { id: 5, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/72c7882f35ad4db1805bb43f09717d8d_292x292.jpeg', price: 325, name: 'Аррива' },
       { id: 6, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c2a25ef27bf24b6f84e034e684f32fa7_292x292.jpeg', price: 325, name: 'Карбонара' },
       { id: 7, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/32ab88d1819048e285a91d91b9ef4451_292x292.jpeg', price: 325, name: 'Песто' },
       { id: 8, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2d674f990a794efe8106c4a03b58310d_292x292.jpeg', price: 325, name: 'Додо' },
       { id: 9, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/88cfeba06c7d4863852c483d0817f763_292x292.jpeg', price: 325, name: 'Мясная' },
       { id: 10, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/8b052931-395f-4b38-8af0-55f6fbd7c9e5.jpg', price: 500, name: 'Супермясная' },
       { id: 11, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg', price: 345 , name: 'Пицца-пирог'},
       { id: 12, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_292x292.jpeg', price: 245, name: 'Пепперони фреш' },
       { id: 13, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/52e240ebc369479ab7b3e371bc1d415c_292x292.jpeg', price: 600, name: 'Пицца из половинок' },
       { id: 14, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/78e732c620334b5e8e5d821685c1c4b5_292x292.jpeg', price: 495, name: 'Додо Микс' },
       { id: 15, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f80272ecb2a74d12b122b176d8cbe4f5_292x292.jpeg', price: 395, name: 'Гавайская' },
       { id: 16, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0fbe5a8c798d4c548c193c34ffb1b785_292x292.jpeg', price: 295, name: 'Двойной цыпленок' },
       { id: 17, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/44fa9ef30b664565bd1fc05af780905b_292x292.jpeg', price: 159, name: 'Додстер' },
       { id: 18, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2ec8a54a9a7d44a68b3f97e4b37ed426_292x292.jpeg', price: 159, name: 'Острый Додстер' },
       { id: 19, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/44a197add75641e3a2ca2ae879b7fd40_292x292.jpeg', price: 159, name: 'Додстер Чипотле' },
       { id: 20, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/38fcdc71fc4c4303a0a929cd2c635b9d_292x292.jpeg', price: 159, name: 'Грибной Стартер ' },
       { id: 21, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a846802a549043e9905744c9c85af53e_292x292.jpeg', price: 159, name: 'Мясной Стартер' },
       { id: 22, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e3eeee00e41c4b2cb4f3f5f2fc0f504e_292x292.jpeg', price: 179, name: 'Картофель из печи' },
       { id: 23, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/80a7715ede17489db4010ce3c5741efa_292x292.jpeg', price: 349 , name: 'Куриные крылья'},
       { id: 24, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1c9bd2c1c77d4da28bdc35ad5fc1f5d6_292x292.jpeg', price: 349, name: 'Куриные кусочки' },
       { id: 25, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c40a6eaa6e294312accb81b76397eefd_292x292.jpeg', price: 129, name: 'Греческий салат' },
       { id: 26, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0e40a10713204a34991fd45d757f9b68_292x292.jpeg', price: 199, name: 'Салат Цезарь' },
       { id: 27, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1e74fb971fe34337a87ef5358b0df0dc_292x292.jpeg', price: 159, name: 'Смородиновый молочный' },
       { id: 28, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/86fe757e450745b295c8b1645efc2a3f_292x292.jpeg', price: 179, name: 'Молочный' },
       { id: 29, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f08ef3e758024f378031e8f796480005_292x292.jpeg', price: 129, name: 'Классический' },
       { id: 30, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/478229ad9cfd4e9aa203aa3d0e022bce_292x292.jpeg', price: 129, name: 'Клубничный' },
       { id: 31, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9b962be9cef54d5ca6197939549e1d5c_292x292.jpeg', price: 159, name: 'Шоколадный' },
       { id: 32, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2b05182a613b48aba826a957f4966689_292x292.jpeg', price: 159, name: 'Карамельный' },
       { id: 33, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4441a2d30c9c48d3a1ac172fac93ac2d_292x292.jpeg', price: 159, name: 'Айс Капучино' },
       { id: 34, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/530f0fecb8b34b07b50d073bd7c2457b_292x292.jpeg', price: 100, name: 'Маффин' },
       { id: 35, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/60db007019724c83a93e82b197169222_292x292.jpeg', price: 100 , name: 'Coca-Cola Orange'},
       { id: 36, picture: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/b76e47db-6bbf-4a64-b82e-eefcbb3edf63.jpg', price: 100, name: 'Coca-Cola Zero' },
       { id: 37, picture: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/23fabaec3dba4969a3065030763a0faa_292x292.webp', price: 1149, name: 'Кибер-комбо' },
       { id: 38, picture: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/6dca194599cd40cba642bef6bef34d4e_292x292.webp', price: 599, name: 'Комбо за 599 ₽' },
       { id: 39, picture: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/f55b3c83e94b4c4d99b44f3e2e856af1_292x292.webp', price: 899, name: '2 пиццы' },
       { id: 40, picture: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/3ccc2085e30f4a3e8b1d7f550228be46_292x292.webp', price: 749, name: '2 пиццы и напиток' },
       { id: 41, picture: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/32544ea9acac4d509924a25a37bc985f_292x292.webp', price: 799, name: '2 пиццы и закуска' },
       { id: 42, picture: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/ad51023e27d74b95ab90629007909a4e_292x292.webp', price: 799, name: 'Пицца и 2 закуски' }
   ],
   selectedPizzas: [],
   num: 0,
};

export const allPizzasReducer = (state = initialState, action: IAllPizzasAction) => {
   switch(action.type) {
      case types.GET_ALL_PIZZAS:
          return {
              ...state,
              allPizzas: action.payload
          }
      case types.SET_ALL_PIZZAS:
          return {
              ...state,
              selectedPizzas: action.payload
          }    
       default: 
        return {
            ...state
        }   
   }
};