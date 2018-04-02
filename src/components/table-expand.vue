<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">地区: </span>
                <span class="expand-value">{{ row.job }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">项目组: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">项目名称: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">借款人: </span>
                <span class="expand-value">《{{ row.book }}》</span>
            </Col>
            <Col span="8">
                <span class="expand-key">是否有准备金: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">借款事由: </span>
                <span class="expand-value">{{ row.music }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
        props: {
            row: Object
        }
    };

    
</script>