<template>
  <div class="">
    <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <Button type="primary" @click="test">Primary</Button>
  </div>


</template>
<script>
    export default {
      data () {
        return {
          username: '',
          password: '',
        }
      },
      methods: {
        test(){
          var _this = this;
          console.log(Vue.cookie.get('test'))
        //   this.$http.get('http://localhost:9710/save')
        //     .then(function(respone){
              
        //     })
        //     .catch(function(error){

        //     })
          
        // }
      }
    }

}
    

</script>
