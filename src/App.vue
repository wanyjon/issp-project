<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function (){
    var username = sessionStorage.getItem("username")
    if (username != null) {
      this.websocket(username)
    } else {
      this.$router.push("/signIn")
    }
  },
  methods: {
    websocket(username){
      var websocket = null;

    //判断当前浏览器是否支持WebSocket
      if('WebSocket' in window){
          websocket = new WebSocket("ws://localhost:9710/websocket?"+username);
      }
      else{
          alert('Not support websocket')
      }

      //连接发生错误的回调方法
      websocket.onerror = function(){
          setMessageInnerHTML("error");
      };

      //连接成功建立的回调方法
      websocket.onopen = function(event){
          setMessageInnerHTML("open");
      }

      //接收到消息的回调方法
      websocket.onmessage = function(event){
          setMessageInnerHTML(event.data);
      }

      //连接关闭的回调方法
      websocket.onclose = function(){
          setMessageInnerHTML("close");
      }

      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function(){
          websocket.close();
      }

      //将消息显示在网页上
      function setMessageInnerHTML(innerHTML){
          document.getElementById('message').innerHTML += innerHTML + '<br/>';
      }

      //关闭连接
      function closeWebSocket(){
          websocket.close();
      }

      //发送消息
      function send(){
          var message = document.getElementById('text').value;
          websocket.send(message);
      }
    },

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
body {
  /*background-color: #495060*/
}
</style>
