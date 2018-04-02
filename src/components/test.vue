<template>
  <!-- <div style="width=100px;height=100px">
    <vue-chart type="bar" :data="chartData"></vue-chart>
  </div> -->

  <Button type="primary" @click="test">Primary</Button>
  
</template>
 
<script>
// import VueChart from 'vue-chart-js'
 
export default {
  methods: {
    test() {
      this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/1')
        .then(function(respone){
          console.log(respone)
        })
    }
  }
  
}
</script>