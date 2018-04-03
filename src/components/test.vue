<template>
  <!-- <div style="width=100px;height=100px">
    <vue-chart type="bar" :data="chartData"></vue-chart>
  </div> -->

  <Button type="primary" @click="test">Primary</Button>
  
</template>
 
<script>
// import VueChart from 'vue-chart-js'
 
export default {
  data(){
    return {
      data9: [{
        hello:'world'
      }],
    }
  },
  methods: {
    test() {
      var _this = this;
      this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/1')
        .then(function(respone){
          // console.log(respone)
          console.log(_this.data9)
        })
    }
  }
  
}
</script>