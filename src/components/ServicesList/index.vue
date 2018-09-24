<template>
  <form class="services-list" v-cloak>
  	<h2>Services</h2>
  	<ul>
  		<li v-for="service in data" v-on:click="toggleActive(service)" v-bind:class="{ 'active': service.active}">
  			{{service.name}} <span>{{service.price | currency}}</span>
  		</li>
  	</ul>
  	<div class="total">
  		Total: <span>{{total() | currency}}</span>
  	</div>
  </form>
</template>

<script>
  export default {
    name: 'ServicesList',
    props: {
      data: Array
    },
    methods: {
    	toggleActive: function(s){
        s.active = !s.active;
    	},
    	total: function(){
        var total = 0;
      	this.data.forEach(function(s){
      		if (s.active){
      			total+= s.price;
      		}
      	});
    	  return total;
      }
    }
  }
</script>

<style scoped lang="scss">
  .services-list {
    background-color: #fafafa;
    border-radius: 2px;
    box-shadow: 0 1px 1px #ccc;
    width: 400px;
    padding: 35px 60px;
    margin: 50px auto;
    h2{
      font-weight: normal;
      line-height: 1;
    }
    ul{
      list-style: none;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      margin: 20px 0 15px;
      padding: 0px;
      li{
      	padding: 20px 30px;
      	background-color: #03A9F4;
      	margin-bottom: 8px;
      	// box-shadow: 0 1px 1px rgba(0,0,0,0.1);
      	cursor: pointer;
        span{
          float: right;
        }
        &.active{
          background-color: #4CAF50;
        }
      }
    }
    .total {
      border-top: 1px solid #ccc;
      padding: 15px 30px;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      span {
        float: right;
      }
    }
  }
</style>
