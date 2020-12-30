<template>
    <v-container>
        <div>Hello guys currently working on the display side of the shop.Sorry for the interruption. We know you are really waiting for the shop to be fully functional.</div>
        <v-row class="mx-auto my-2">
            <v-col md="12" offset-md="1">
                <v-chip-group active-class="green" center-active="true" column>
                    <v-chip @click="getItems('all')">All</v-chip>
                    <v-chip @click="getItems('pans')">Pans</v-chip>
                    <v-chip @click="getItems('cakes')" >Cakes</v-chip>
                    <v-chip @click="getItems('biscuits')">Biscuits</v-chip>
                    <v-chip @click="getItems('cupcakes')">Cup Cakes</v-chip>
                    <v-chip @click="getItems('pasteries')">Pasteries</v-chip>
                </v-chip-group>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col md="3" v-for="item in items" :key="item.id">
                
                <v-card :loading="loading" max-width="100%" class="mx-auto my-4">
                    <template slot="progress">
                    <v-progress-linear height="5" indeterminate color="green" ></v-progress-linear>
                    </template>
                    <router-link :to="'/shop/' + item.id">
                    <v-img height="150" :src="item.thubmnail" ></v-img>
                     </router-link>
                    <v-card-title class="my-title">{{item.title}}</v-card-title>
                  
                    <v-card-subtitle>{{item.price}}.0 €</v-card-subtitle>
                    <v-card-text>
                        <p>{{item.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn outlined @click="addToCart" class="mb-2" x-small color="green">Add To Bucket</v-btn>
                    </v-card-actions>
                </v-card>
                
                </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
    
   data:() => ({
       loading:false,
       items:Array,
   }),
   methods:{
       addToCart(){
           this.loading = true;
           setTimeout(() => (this.loading =  false),2000);
       },
       getItems(itemC){
        if(itemC === "all"){
            this.items = this.konsiItems;
        }
        else{
          this.items = this.konsiItems.filter((item) => item.category === itemC);
        }
        //console.log("why not working " + this.items);
       },
   },
   
   computed: mapState({
    //    allItems(state){
    //        this.items = state.items;
    //        console.log("my items " + this.items);
    //        return this.items;
    //    },
        konsiItems:'items',     
    }),
    created:function(){
        this.items = this.konsiItems;
        //console.log(this.items);
    }
}
</script>
<style >
.my-title{
    color:black !important;
}
</style>