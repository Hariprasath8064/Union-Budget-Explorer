<template>
    <div class="navbar">
      <router-link to="/" class="icon">Union Budget Explorer</router-link>
      <router-link to="/Expenditure" class="right">Expenditure</router-link>
      <router-link to="/NonTax" class="right">Non-tax Income</router-link>
      <router-link to="/Schemes" class="right">Schemes</router-link>
      <router-link to="/About" class="right">Team</router-link>
    </div>
  </template>
  
  <style scoped>
    .navbar {
      overflow: hidden;
      z-index: 2;
      background-color: #1c2127;
      padding-left: 20px;
      padding-right: 20px;
    }
  
    .navbar a {
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 17px 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 15px; /* Adjusted margin-right */
      text-decoration: none;
      transition: background-color 0.125s;
      border-radius: 10px;
    }
  
    .navbar .icon {
      float: left;
      font-size: 18px;
      font-weight: 600;
      padding-right: 20px;
    }
  
    .navbar .right {
      float: right;
    }
  
    .navbar .right:not(.icon):hover {
      background-color: #f8d075;
      color: black;
      border-radius: 10px;
    }
  </style>
  