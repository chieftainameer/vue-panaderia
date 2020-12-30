import Vue from "vue";
import Vuex from "vuex";
import products from './products';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        items:products,
        cart:[],
        finalPrice:0,
    },
    mutations:{
        addToCart(state,payload){
            if(payload.quantity == 0){
                payload.quantity = 1;
            }
            else if(state.cart.find((item) => item.id == payload.id)){
                state.cart.find((item) => {
                    item.quantity++;
                    item.totalPrice = item.quantity * item.price;
                    console.log(item.totalPrice );
                });

            }
            else{
                let newItem = {...payload,totalPrice:payload.quantity*payload.price};
                state.cart.push(newItem);
                console.log(newItem.totalPrice);
            }
        },
    },
    actions:{}
});

