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
	<div style="background: #495060">
		<Row>
	        <Col span="20" offset="2">
	        	<div style="margin-top: 15%; margin-bottom: 15%">
	        		<Card :bordered="false">
		            	<Row>
		            		<Col span="12">
		            			<!-- <p>Content of card</p> -->
		            			<div align="center">
		            				<img src="@/assets/IMG_0321.jpeg" width="75%" height="75%">
		            			</div>
		            			
		            		</Col>
		            		<Col span="12">
		            			<div align="center">
		            				<h1>hello world</h1>
		            				<p>You cannot improve your past, but you can improve your future. Once time is wasted, life is wasted.</p>
		            				<p style="margin-bottom: 15px">Kill two birds with one stone.</p>
		            				<Row >
		            					<Col span="12" offset="6">
		            						<Input v-model="value" placeholder="Enter something..." style="margin-bottom: 15px">
		            							<Icon type="ios-person-outline" slot="prepend"></Icon>
		            						</Input>
		            						 <Input v-model="value" placeholder="Enter something..." style="margin-bottom: 15px">
		            							<Icon type="ios-locked-outline" slot="prepend"></Icon>
		            						</Input>
		            						<Button type="primary" shape="circle" @click="test">&nbsp;&nbsp;&nbsp;&nbsp;sign in&nbsp;&nbsp;&nbsp;&nbsp;</Button>
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
    			value: '',
    		}
    	},
    	methods: {
    		test(){
    			// var _this = this;
    			// alert("hello world")
    			this.$router.push({ name: 'demo' ,params: { obj: this.value }});
    			// { path: 'home' }
    		}
    	}
        
    }
</script>