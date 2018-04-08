<template>
  <div>
      <Row>
        <Col span="8" offset="4">
          <Timeline>
              <TimelineItem color="green">
                  <Icon type="trophy" slot="dot"></Icon>
                  <span>发布里程碑版本</span>
              </TimelineItem>
              <TimelineItem>
                <p slot="dot">12:22</p>
                <div style="margin-left: 15px">
                  发布1.0版本
                </div>
                <!-- <h1>hello world</h1> -->
                
              </TimelineItem>
              <TimelineItem>发布2.0版本</TimelineItem>
              <TimelineItem>发布3.0版本</TimelineItem>
          </Timeline>
        </Col>
      </Row>
  </div>
    
</template>
<script>
    export default {
        
    }
</script>