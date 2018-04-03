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
                <span class="expand-value">{{ row.area }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">项目组: </span>
                <span class="expand-value">{{ row.project }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">项目名称: </span>
                <span class="expand-value">{{ row.projectName }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">借款人: </span>
                <span class="expand-value">{{ row.borrower }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">是否有准备金: </span>
                <span class="expand-value">{{ row.readyMoney }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">借款事由: </span>
                <span class="expand-value">{{ row.reason }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">一级科目: </span>
                <span class="expand-value">{{ row.classA }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">二级科目: </span>
                <span class="expand-value">{{ row.classB }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">三级科目: </span>
                <span class="expand-value">{{ row.classC }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8" >
                <span class="expand-key">无发票备注: </span>
                <span class="expand-value">{{ row.noInvoice }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">是否补写: </span>
                <span class="expand-value">{{ row.writeUp }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">参与人: </span>
                <span class="expand-value">{{ row.participants }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8" >
                <span class="expand-key">借款方式: </span>
                <span class="expand-value">{{ row.wayOfBorrowing }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">商品链接: </span>
                <span class="expand-value">{{ row.link }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">备注: </span>
                <span class="expand-value">{{ row.remarks }}</span>
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