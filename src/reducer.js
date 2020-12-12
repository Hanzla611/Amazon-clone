export const getBasketTotal = (basket) =>
 basket?.reduce((amount, item ) => item.price + amount, 0);

export const initialState = {
    basket: [{
        id: "12321341",
        title: "The lean startup: Now constant Innovation Creation",
        price: 11.96,
        rating: 5,
        image: "harry.jpg"
    },
    ],
    user: null,
   
};


const reducer  =  (state, action) =>  {
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            return { 
                ...state,
                basket: [...state.basket, action.item]
             };
           
        case 'REMOVE_FROM_BASKET' :

            let newBasket = [...state.basket];
            
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0 ) {
            newBasket.splice(index, 1);
            } else {}
             console.warn(
                 'cant remove product (id: ${action.id} as its not'   
             );
            return { ...state, basket: newBasket };
           
        default:
            return state;
    }
}


export default reducer;