<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
	<div>
		<Row>
	        <Col span="10" offset="7">
	        	<div style="margin-top: 15%; margin-bottom: 15%">
	        		<Card :bordered="false" dis-hover>
		            	<Row>

		            		<Col span="24" offset="0">
		            			<div align="center">
		            				<h1>hello world</h1>
		            				<p>You cannot improve your past, but you can improve your future. Once time is wasted, life is wasted.</p>
		            				<p style="margin-bottom: 15px">Kill two birds with one stone.</p>
		            				<Row >
		            					<Col span="12" offset="6">
		            						<Input v-model="user.name" placeholder="Enter username..." style="margin-bottom: 15px">
		            							<Icon type="ios-person-outline" slot="prepend"></Icon>
		            						</Input>
		            						 <Input type="password" v-model="user.password" placeholder="Enter password..." style="margin-bottom: 15px">
		            							<Icon type="ios-locked-outline" slot="prepend"></Icon>
		            						</Input>
		            						<Button type="primary" shape="circle" @click="test2">&nbsp;&nbsp;&nbsp;&nbsp;sign in&nbsp;&nbsp;&nbsp;&nbsp;</Button>
		            					</Col>
		            				</Row>
		            				<div style="margin-top: 50px">
		            					haven't accout ?  <router-link to="/signUp">&nbsp;&nbsp;sign up</router-link>
		            				</div>

		            			</div>



		            		</Col>
		            	</Row>
		                <!-- <p slot="title">Borderless card</p> -->

		            </Card>
	        	</div>

	        </Col>

	    </Row>
	</div>

</template>
<script>
    export default {
    	data () {
    		return {
    			user: {
    				name: '',
          			password: '',
    			}
    			
    		}
    	},
    	methods: {
    		test(){
    			var _this = this;
    			 var websocket = null;

    //判断当前浏览器是否支持WebSocket
    if('WebSocket' in window){
        websocket = new WebSocket("ws://localhost:9710/websocket?"+this.username);
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
        // setMessageInnerHTML("open");
        // alert("hello")
        _this.$router.push({ path: '/' })
    }

    //接收到消息的回调方法
    websocket.onmessage = function(event){
        // setMessageInnerHTML(event.data);
        console.log(event)
        _this.$Notice.info({
                    title: 'Notification title',
                    desc:'Here is the notification description. Here is the notification description. '
        });
    }

    //连接关闭的回调方法
    websocket.onclose = function(){
        // setMessageInnerHTML("close");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function(){
        websocket.close();
    }

    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML){
        // document.getElementById('message').innerHTML += innerHTML + '<br/>';
    }

    //关闭连接
    function closeWebSocket(){
        websocket.close();
    }

    //发送消息
    function send(){
        // var message = document.getElementById('text').value;
        // websocket.send(message);
    }
    		},

    		test2 () {
    			var _this = this
    			// sessionStorage.setItem("user_name","test22");
    			this.$http.post('http://localhost:9710/signIn',this.user)
    				.then(function(respone){
    					console.log(respone)
    					_this.test()
    					// console.log(document.cookie)
    					sessionStorage.setItem("username",respone.data.name)
    					sessionStorage.setItem("role",respone.data.roles[0].name)
    					// console.log(sessionStorage.)
              			// document.cookie = "user="+respone.data;
    					_this.$router.push({ name: 'demo', params: { users: respone.data }});

    				})
    				.catch(function(error){
    					console.log(error)
    					_this.$Message.error(error.response.data.message);
    					error.response.data
    				})
    		}
    	}

    }
</script>
