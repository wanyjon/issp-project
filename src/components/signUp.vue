<style scoped>

</style>
<template>
  <div class="">
    <Row>
      <Col span="" offset="3">
        <div class="" style="margin-top: 15px;margin-bottom: 15px">
          <Button type="primary">个人注册</Button>
          <Button type="ghost">企业注册</Button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="14" offset="7">
        <div class="" style="margin-top: 15px;margin-bottom: 15px">
          <Steps :current="num">
            <Step title="手机号" icon="android-phone-portrait"></Step>
            <Step title="验证身份" icon="person-add"></Step>
            <Step title="设置用户" icon="android-lock"></Step>
            <!-- <Icon type="android-lock"></Icon> -->
            <!-- <Icon type="android-phone-portrait"></Icon> -->
            <Step title="待进行" icon="person-add" v-if="false"></Step>
          </Steps>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="4" offset="10">
        <div class="" align="center" style="margin-top: 15px;margin-bottom: 15px">
          <Form :model="formTop" label-position="top">
              <FormItem label="输入注册的手机号">
                  <Input v-model="formTop.input1" placeholder="请输入手机号码"></Input>
              </FormItem>
              <!-- <FormItem label="Title name">
                  <Input v-model="formTop.input2"></Input>
              </FormItem>
              <FormItem label="Aligned title">
                  <Input v-model="formTop.input3"></Input>
              </FormItem> -->
          </Form>
          <Button type="primary" @click="cout">{{this.text}}</Button>
        </div>
      </Col>
    </Row>
  </div>


</template>
<script>
    export default {
      data(){
        return {
          text: "下一步",
          num: 0,
          formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
        }
      },
      methods: {
        cout(){
          if (this.num < 2) {
            this.num += 1;
          }
          if (this.num == 2) {
            this.text = "确认"
          }
        }
      }

    }
</script>
