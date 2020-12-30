<template>
<div>
    <v-container class="maino">
        <v-row>
            <v-col cols="12" >
                <router-link to="/shop">
                <v-icon left>mdi-arrow-left-thick</v-icon>
                </router-link>
                </v-col>
        </v-row>
        <v-row>
            <v-col cols="7">
                <v-img height="400" width="100%" :src="shopItem.thubmnail"></v-img>
            </v-col>
            <v-col cols="5">
                <h2>{{shopItem.title}}</h2>
                <p>Price {{shopItem.price}} Euro</p>
                <p>{{shopItem.description}}</p>
                <v-row>
                    <v-col cols="2" offset="1">
                       <v-btn color="red" x-small @click="reduceQuantity"><v-icon>mdi-minus</v-icon></v-btn>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field  class="mt-n5 ml-n2" v-model="quantity">
                      </v-text-field>
                    </v-col>
                    <v-col cols="2">
                       <v-btn color="red" x-small @click="increaseQuantity"><v-icon>mdi-plus</v-icon></v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <select>
                            <option>Select Seasoning</option>
                            <option>Aceitona Entera</option>
                            <option>Patee</option>
                            <option>nada</option>
                        </select>
                    </v-col>
                </v-row>
                <v-row class="add-btn">
                    <v-col cols="12" >
                        <v-btn color="green" @click="addToCart(shopItem)">Add To Cart</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" v-for="item in related" :key="item.id">
                <v-card>
                    <router-link :to="'/shop/' + item.id">
                    <v-img :src="item.thubmnail" width="100%" height="200px" ></v-img>
                    </router-link>
                    <v-card-title>{{item.title}}</v-card-title>
                    <v-card-subtitle>{{item.price}} Euros</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data:() => ({
       quantity:1,
    }),
    computed:{
        ...mapState({
        items:'items'
    }),
    shopItem(){
            return this.items.find((item) => item.id == this.$route.params.id )
        },
        related(){
            return this.items.filter((item)=>item.category == this.shopItem.category).filter((item)=> item.id != this.shopItem.id);
        },

    },
    methods:{
        reduceQuantity(){
            if(this.quantity <= 1){
                this.quantity = 1;
            }
            else{
                this.quantity--;
            }
        },
        increaseQuantity(){
            this.quantity++;
        },
        addToCart(item){
            let cartItem = {...item,quantity:this.quantity};
             this.$store.commit('addToCart',cartItem);
            // alert(cartItem.quantity +" "+ cartItem.title +" "+ cartItem.price);
        },
     },
    // created:function(){
    //     this.item = this.items.find((item) => item.id == this.$route.params.id);
    //     this.relatedItems = this.items.filter((i) => i.category === this.item.category).filter((it)=>it.id != this.item.id);
    // },
}
</script>
<style scoped>
.maino{
    position: relative;
}

</style>