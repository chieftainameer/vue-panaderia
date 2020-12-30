import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import ShopItem from "./components/ShopItem";
import MainShop from "./components/shop/main";

Vue.use(VueRouter);
// const foo = `<template>Hello i am working </template>`;
const routes = [
  {
    path:'/',
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path:'/shop',
    component:MainShop,
  },
  {
    path:'/shop/:id',
    component:ShopItem,
  }
];

export default new VueRouter({ routes });
