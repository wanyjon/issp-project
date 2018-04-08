<style scoped>
    /*img {
        width: 30%;
        height: 30%;
        border-radius: 100%;
    }*/
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    h2{
        color: white
    }
    .center-right{
        float: right;
    }
    .top,.bottom{
        text-align: center;
    }
    body {
        background: white;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
                <div align="center" style="margin-top: 15px;margin-bottom: 30px">
                    <!-- <img src="@/assets/WechatIMG561.jpeg"> -->
                    <Avatar size="large" icon="person"/>
                    <h2>wany</h2>
                    <p style="color: white">Action of the king</p>
                    <Row>
                        <Col span='16' offset="4">
                            <Row>
                                <Col span="8">
                                    <h2>12</h2>
                                </Col>
                                <Col span="8">
                                    <div style="float:left;width: 1px;height: 25px; background: white;margin-left: 20px"></div> 
                                </Col>
                                <Col span="8">
                                    <h2>234</h2>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span='16' offset="4">
                            <div style="margin-bottom: 15px">
                                <Row>
                                    <Col span="8">
                                        <p style="color: white">action</p>
                                    </Col>
                                    <Col span="8">
                                        <div style="float:left;width: 1px;height: 25px; background: #495060;margin-left: 20px"></div> 
                                    </Col>
                                    <Col span="8">
                                        <p style="color: white">king</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col span="6">
                                    <!-- <a href=""><Icon type="power" size="20" color="white"></Icon></a> -->
                                    <div class="top">
                                        <!-- <Poptip trigger="hover" title="提示标题" content="" placement="top-start">
                                            <a href=""><Icon type="power" size="20" color="white"></Icon></a>
                                        </Poptip> -->
                                        <!-- <Tooltip content="Top Left 文字提示" placement="top-start"> -->
                                            <!-- <Button>上左</Button> -->
                                            <!-- <a href=""></a> -->
                                            <router-link to="/signIn"><Icon type="power" size="20" color="white"></Icon></router-link>
                                        <!-- </Tooltip> -->
                                    </div>
                                    
                                </Col>
                                <Col span="6">
                                    <!-- <Badge dot> -->
                                        <!-- <Icon type="ios-bell-outline" size="26"></Icon> -->
                                    <!-- </Badge> -->
                                    <!-- <div style="float:left;width: 1px;height: 25px; background: #495060;margin-left: 20px"></div>  -->
                                    <div class="top">
                                        <!-- <Poptip trigger="hover" title="提示标题" content="" placement="top"> -->
                                            <a href=""><Icon type="social-youtube" size="20" color="white"></Icon></a>
                                        <!-- </Poptip> -->
                                    </div>
                                    
                                    
                                </Col>
                                <Col span="6">
                                    <Badge dot>
                                        <Icon type="chatbox" size="20" color="white"></Icon>
                                    </Badge>
                                    <!-- <div class="top">
                                        <Poptip trigger="hover" title="提示标题" content="" placement="top">
                                            <Badge dot>
                                                <a href=""><Icon type="chatbox" size="20" color="white"></Icon></Icon></a>
                                            </Badge>
                                        </Poptip>
                                    </div> -->
                                </Col>
                                <Col span="6">
                                    <Icon type="person-add" size="20" color="white"></Icon>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                    <!-- <Button type="primary">info</Button> -->

                </div>
                <Menu :active-name="cai" theme="dark" width="auto" :class="menuitemClasses" @on-select="menu">
                    <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                借款管理
                            </template>
                            <MenuItem name="1-1">待审核</MenuItem>
                            <MenuItem name="1-2">待分析</MenuItem>
                            <MenuItem name="1-3">待付款</MenuItem>
                            <MenuItem name="1-4">待确认</MenuItem>
                            <MenuItem name="1-5">待还款</MenuItem>
                            <MenuItem name="1-6">待核对</MenuItem>
                            <MenuItem name="1-7">已完成</MenuItem>
                            <MenuItem name="1-8">有误记录</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                报销管理
                            </template>
                            <MenuItem name="2-1">待审核</MenuItem>
                            <MenuItem name="2-2">待分析</MenuItem>
                            <MenuItem name="2-3">待核对</MenuItem>
                            <MenuItem name="2-4">待付款</MenuItem>
                            <MenuItem name="2-5">已完成</MenuItem>
                            <MenuItem name="2-6">有误记录</MenuItem>
                        </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '200px'}">
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px',padding: '20px'}">
                    <Tabs :value="name">
                        <TabPane label="列表" icon="navicon" name="name1">
                            <Table :columns="columns10" :data="data9" :loading="loading" @on-select="selectRemove"></Table>
                            <div style="margin-top: 15px;margin-bottom: 15px">
                                <Button style="margin-right: 5px">这是一个无所事事的按钮</Button>
                                <Poptip
                                    confirm
                                    title="您确认删除这些内容吗？"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <Button type="error" @click="">批量删除</Button>
                                </Poptip>
                            </div>
                            <div align="center">
                                <Page :total="total" show-total @on-change="pageSwitch"></Page>
                                <h1>{{this.$route.params.obj}}</h1>
                            </div>
                            
                        </TabPane>
                        <TabPane label="添加" icon="plus" v-if="see" name="name2">
                            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" label-position="top">
                            <Row :gutter="16">
                                <Col span="4" offset="1">
                                    <div>
                                        
                                            <FormItem label="借款人" prop="borrower">
                                                <Input v-model="formValidate.borrower" placeholder="请输入借款人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="负责人" prop="charge">
                                                <Input v-model="formValidate.charge" placeholder="请输入负责人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="借款方式" prop="wayOfBorrowing">
                                                <Select v-model="formValidate.wayOfBorrowing" placeholder="选择你的借款方式">
                                                    <Option value="现金">现金</Option>
                                                    <Option value="公司代购">公司代购</Option>
                                                    <Option value="转账">转账</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="预计借款时间" prop="estimateTime">
                                                <!-- <Row> -->
                                                    <!-- <Col span="24"> -->
                                                        <!-- <FormItem> -->
                                                            <DatePicker type="date" placeholder="选一个好的时机" v-model="formValidate.estimateTime"></DatePicker>
                                                        <!-- </FormItem> -->
                                                    <!-- </Col> -->
                                                <!-- </Row> -->
                                            </FormItem>
                                            <FormItem label="是否有发票" prop="invoice">
                                                <RadioGroup v-model="formValidate.invoice">
                                                    <Radio label=true>是</Radio>
                                                    <Radio label=false>否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="金额" prop="money">
                                                <InputNumber :max="10000" :min="0" v-model="formValidate.money"></InputNumber>
                                            </FormItem>
                                            <FormItem label="一级科目" prop="classA">
                                                <Select v-model="formValidate.classA" placeholder="请选择一个一级科目">
                                                    <Option value="主营业务成本">主营业务成本</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="三级科目" prop="classC">
                                                <Select v-model="formValidate.classC" placeholder="请选择一个三级科目">
                                                    <Option value="餐费">餐费</Option>
                                                    <Option value="交通费">交通费</Option>
                                                    <Option value="房租">房租</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="借款事由" prop="reason">
                                                <Input v-model="formValidate.reason" placeholder="说下理由呗"></Input>
                                            </FormItem>
                                    </div>
                                </Col>
                                <Col span="4">
                                    <div>
                                        
                                            <FormItem label="参与人">
                                                <Input v-model="formValidate.participants" placeholder="请输入参与人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="地区" prop="area">
                                                <Input v-model="formValidate.area" placeholder="请输入所在地区"></Input>
                                            </FormItem>
                                            <FormItem label="项目组" prop="project">
                                                <Input v-model="formValidate.project" placeholder="所在项目组"></Input>
                                            </FormItem>
                                            
                                            <FormItem label="项目名称" prop="projectName">
                                                <Input v-model="formValidate.projectName" placeholder="这个项目有名字吗"></Input>
                                            </FormItem>
                                            <FormItem label="是否补写" prop="writeUp">
                                                <RadioGroup v-model="formValidate.writeUp">
                                                    <Radio label=true>是</Radio>
                                                    <Radio label=false>否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="无发票备注" prop="noInvoice">
                                                <Input v-model="formValidate.noInvoice" placeholder="请输入无发票备注"></Input>
                                            </FormItem>
                                            <FormItem label="二级科目" prop="classB">
                                                <Select v-model="formValidate.classB" placeholder="请选择一个二级科目">
                                                    <Option value="市场费">市场费</Option>
                                                    <Option value="员工培训">员工培训</Option>
                                                    <Option value="办公费">办公费</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="是否有准备金" prop="readyMoney">
                                                <RadioGroup v-model="formValidate.readyMoney">
                                                    <Radio label=true>是</Radio>
                                                    <Radio label=false>否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                    </div>
                                </Col>
                                <Col span="15">
                                    <vue-chart type="bar" :data="chartData"></vue-chart>
                                    <!-- <vue-chart type="line" :data="chartData"></vue-chart> -->
                                    <!-- <h1>{{formValidate.borrower}}</h1>
                                    <h1>{{formValidate.charge}}</h1>
                                    <h1>{{formValidate.participants}}</h1>
                                    <h1>{{formValidate.estimateTime}}</h1>
                                    <h1>{{formValidate.area}}</h1>
                                    <h1>{{formValidate.project}}</h1>
                                    <h1>{{formValidate.projectName}}</h1>
                                    <h1>{{formValidate.wayOfBorrowing}}</h1>
                                    <h1>{{formValidate.classA}}</h1>
                                    <h1>{{formValidate.classB}}</h1>
                                    <h1>{{formValidate.classC}}</h1>
                                    <h1>{{formValidate.writeUp}}</h1> -->
                                </Col>
                            </Row>
                            <Row>
                                <Col span="8" offset="1">
                                    <FormItem label="商品链接" prop="link">
                                        <Input v-model="formValidate.link" placeholder="请输入商品链接"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="8" offset="1">
                                    <FormItem label="备注">
                                        <Input v-model="formValidate.remarks" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="要不要说点什么呢"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset="1">
                                    <FormItem>
                                        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                                        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                            </Form>
                        </TabPane>
                    </Tabs>
                    
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import expandRow from './table-expand.vue';
    import VueChart from 'vue-chart-js';
    export default {
        components: { 
            expandRow,
            VueChart
        },
        data () {
            return {
                total: 0,
                name: "name1",
                loading: false,
                see: true,
                cai: "1-1",
                formValidate: {
                    user: 'wany',
                    borrower: '',
                    charge: '',
                    participants: '',
                    estimateTime: '',
                    area: '',
                    project: '',
                    projectName: '',
                    wayOfBorrowing: '',
                    classA: '',
                    classB: '',
                    classC: '',
                    writeUp: '',
                    reason: '',
                    money: 0,
                    invoice: '',
                    noInvoice: '',
                    readyMoney: '',
                    link: '',
                    remarks: '',
                    payOrigin: '',
                    payDate: '',
                },
                auditings: {
                    pass: '',
                    opinion: '',
                    reimbursement: '',
                    borrowMoney: '',
                    sendBack: '',
                    returnDate: '',
                    restitution: '',
                    account: '',
                },
                chartData: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                ruleValidate: {
                    borrower: [
                        { required: true, message: '借款人不能为空', trigger: 'blur' }
                    ],
                    charge: [
                        { required: true, message: '负责人不能为空', trigger: 'blur' },
                        // { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    area: [
                        { required: true, message: '地区不能为空', trigger: 'blur' },
                    ],
                    project: [
                        { required: true, message: '项目组不能为空', trigger: 'blur' },
                    ],
                    projectName: [
                        { required: true, message: '项目名称不能为空', trigger: 'blur' },
                    ],
                    noInvoice: [
                        { required: true, message: '无发票备注不能为空', trigger: 'blur' },
                    ],
                    link: [
                        { required: true, message: '商品链接不能为空', trigger: 'blur' },
                    ],
                    reason: [
                        { required: true, message: '借款事由不能为空', trigger: 'blur' },
                    ],
                    money: [
                        { required: true, type: 'number', message: '金额不能为空', trigger: 'blur' },
                    ],
                    area: [
                        { required: true, message: '地区不能为空', trigger: 'blur' },
                    ],
                    wayOfBorrowing: [
                        { required: true, message: '请选择一种借款方式', trigger: 'change' }
                    ],
                    invoice: [
                        { required: true, message: '有还是没有发票', trigger: 'change' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    writeUp: [
                        { required: true, message: '到底是不是补写的', trigger: 'change' }
                    ],
                    readyMoney: [
                        { required: true, message: '有没有准备钱', trigger: 'change' },
                        // { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    estimateTime: [
                        { required: true, type: 'date', message: '预估一下借款的时间', trigger: 'blur' }
                    ],
                    classA: [
                        { required: true, type: 'string', message: '一级科目不能为空', trigger: 'change' }
                    ],
                    classB: [
                        { required: true, type: 'string', message: '二级科目不能为空', trigger: 'change' }
                    ],
                    classC: [
                        { required: true, type: 'string', message: '三级科目不能为空', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                },
                isCollapsed: false,
                columns10: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            this.remove(params.row.id)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                },'审核')
                            ]);
                        }
                    }
                ],
                data9: [
                    {
                        user: 'John Brown',
                        fillTime: 18,
                        money: 'New York No. 1 Lake Park',
                        estimateTime: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry'
                    },
                    {
                        user: 'Jim Green',
                        fillTime: 25,
                        money: 'London No. 1 Lake Park',
                        estimateTime: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        user: 'Joe Black',
                        fillTime: 30,
                        money: 'Sydney No. 1 Lake Park',
                        estimateTime: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    },
                    {
                        user: 'Jon Snow',
                        fillTime: 26,
                        money: 'Ottawa No. 2 Lake Park',
                        estimateTime: 'Data Analyst',
                        interest: 'snooker',
                        birthday: '1988-7-25',
                        book: 'A Dream in Red Mansions',
                        movie: 'A Chinese Ghost Story',
                        music: 'actor'
                    }
                ]
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        created: function(){
            console.log(this.$route.params)
                var _this = this;
                this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/1')
                .then(function(respone){
                    // var _this = this;
                    // console.log(respone.data.data.content);
                    _this.data9 = respone.data.data.content
                    _this.total = respone.data.data.totalSize
                    _this.loading = false
                })
                .catch(function(error){
                    console.log(error)
                })
        },
        mounted:function(){
            // console.log(this.data9)
            // this.data9 = 1
            // this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/1')
            //     .then(function(respone){
            //         // var _this = this;
            //         console.log(respone.data.data.content);
            //         this.data9 = respone.data.data.content
            //     })
            //     .catch(function(error){
            //         console.log(error)
            //     })
        },
        methods: {

            selectRemove(selection,row){

                console.log(selection)
                console.log(row)
            },
            batchRemove () {

            },
            edit (index) {
                this.$Modal.confirm({
                    okTest: '提交',
                    cancelText: '取消',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    },
                    render: (h) => {
                        return h('div',[
                                    h('Input',{

                                    })

                            ])
                    }

                })
            },
            pageSwitch (index) {
                var _this = this;
                _this.loading = true
                if (cai=="1-1") {
                    this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/'+index)
                        .then(function(respone){
                            // var _this = this;
                            // console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                } else if (cai=="1-2") {
                    this.$http.get('http://192.168.0.94:8763/lend/v1/waitAnalysis/'+index)
                        .then(function(respone){
                            // var _this = this;
                            // console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                }
                
            },
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            show3 (index) {
                this.$Modal.confirm({
                            // title: "title",
                            // content: "content",
                            onOk: () => {                                         
                                this.$http.put('http://192.168.0.94:8763/lend/v1/waitConfirmEdit',this.data9[index])
                                    .then(function(respone){
                                        location.reload()
                                        
                                    })
                                    .catch(function(error){
                                        console.log(error)
                                    })

                                this.$Message.info('Clicked ok');
                            },
                            okText: '付款',
                            cancelText: "取消",
                            render: (h) => {
                                return h('div',[
                                    h('h1', 'hello word'),
                                    
                                
                                ])  
                        
                            }
                })
                        // });
            },
            show2 (index) {
                this.$Modal.confirm({
                    okText: '付款',
                    cancelText: '取消',
                    onOk: () => {                                         
                        this.$http.put('http://192.168.0.94:8763/lend/v1/waitPaymentEdit',this.data9[index])
                            .then(function(respone){
                                location.reload()
                                // var _this = this;
                                // console.log(respone.data.data.content);
                                // _this.data9 = respone.data.data.content
                                // _this.total = respone.data.data.totalSize
                                // _this.loading = false
                            })
                            .catch(function(error){
                                console.log(error)
                            })

                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        
                        this.$Message.info('Clicked cancel');
                    },
                    render: (h) => {
                        return h('div',[
                                    h('h1', '付款'),
                                    h('h3', '预计借款日期：'+this.data9[index].estimateTime),
                                    h('h3', '借款人：'+this.data9[index].borrower),
                                    h('h3', '负责人：'+this.data9[index].charge),
                                    h('h3', '借款方式：'+this.data9[index].wayOfBorrowing),
                                    h('h3', '参与人：'+this.data9[index].participants),
                                    h('h3', '地区：'+this.data9[index].area),
                                    h('h3', '项目组名称：'+this.data9[index].projectName),
                                    h('h3', '一级科目：'+this.data9[index].classA),
                                    h('h3', '二级科目：'+this.data9[index].classB),
                                    h('h3', '三级科目：'+this.data9[index].classC),
                                    h('h3', '总金额：'+this.data9[index].money+'元'),
                                    h('h3', '借款事由：'+this.data9[index].reason),
                                    h('h3', '商品链接：'+this.data9[index].link),

                                    h('Select', {
                                                on: {
                                                    input: (val) => {
                                                        this.data9[index].payOrigin = val;
                                                    }
                                                },
                                                style: {
                                                    marginBottom: '15px'
                                                },

                                            },[
                                            h('Option',{
                                                props: {
                                                    value: '北京艾佳天诚信息技术有限公司',
                                                    // key: 'hello'
                                                    // autofocus: true,
                                                    // placeholder: '请填写审核意见'
                                                },
                                            }),
                                            h('Option',{
                                                props: {
                                                    value: '艾佳个人户曾强',
                                                    // key: 'hello'
                                                    // autofocus: true,
                                                    // placeholder: '请填写审核意见'
                                                },
                                            }),
                                            h('Option',{
                                                props: {
                                                    value: '黄应桃',
                                                    // key: 'hello world'
                                                    // autofocus: true,
                                                    // placeholder: '请填写审核意见'
                                                },
                                            }),
                                        ],
                                        
                                    ),
                                    h('DatePicker',{
                                                on: {
                                                    input: (val) => {
                                                        this.data9[index].payDate = val;
                                                    }
                                                },
                                    })
                                
                        ])  
                        
                    }
                })

            },
            show (index) {
                this.$Modal.confirm({
                    okText: '通过',
                    cancelText: '否决',
                    onOk: () => {
                        this.auditings.pass = true
                        console.log(this.auditings)
                        this.data9[index].auditings.push(this.auditings)
                        console.log(this.data9[index])
                        this.$http.put('http://192.168.0.94:8763/lend/v1/waitAuditedExamine',this.data9[index])
                            .then(function(respone){
                                console.log(respone)
                                location.reload()
                            })
                            .catch(function(error){
                                console.log(error)
                            })
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.auditings.pass = false
                        console.log(this.auditings)
                        this.data9[index].auditings.push(this.auditings)
                        console.log(this.data9[index])
                        this.$http.put('http://192.168.0.94:8763/lend/v1/waitAuditedExamine',this.data9[index])
                            .then(function(respone){
                                console.log(respone)
                            })
                            .catch(function(error){
                                console.log(error)
                            })
                        this.$Message.info('Clicked cancel');
                    },
                    render: (h) => {
                        return h('div',[
                                    h('h1', 'hello world'
                                    ),
                                    h('h3', '预计借款日期：'+this.data9[index].estimateTime),
                                    h('h3', '借款人：'+this.data9[index].borrower),
                                    h('h3', '负责人：'+this.data9[index].charge),
                                    h('h3', '借款方式：'+this.data9[index].wayOfBorrowing),
                                    h('h3', '参与人：'+this.data9[index].participants),
                                    h('h3', '地区：'+this.data9[index].area),
                                    h('h3', '项目组名称：'+this.data9[index].projectName),
                                    h('h3', '一级科目：'+this.data9[index].classA),
                                    h('h3', '二级科目：'+this.data9[index].classB),
                                    h('h3', '三级科目：'+this.data9[index].classC),
                                    h('h3', '总金额：'+this.data9[index].money+'元'),
                                    h('h3', '借款事由：'+this.data9[index].reason),
                                    h('h3', '商品链接：'+this.data9[index].link),
                                    h('Input', {
                                        props: {
                                            value: this.auditings.opinion,
                                            autofocus: true,
                                            placeholder: '请填写审核意见'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.auditings.opinion = val;
                                            }
                                        }
                                    }),
                                
                        ])
                        
                    }
                })
            },
            show4 (index) {
                this.$Modal.confirm({
                    okText: '确认',
                    cancelText: '取消',
                    onOk: () => {
                        this.auditings.pass = true
                        console.log(this.auditings)
                        this.data9[index].auditings.push(this.auditings)
                        console.log(this.data9[index])
                        this.$http.put('http://192.168.0.94:8763/lend/v1/waitRepayment',this.data9[index])
                            .then(function(respone){
                                console.log(respone)
                                location.reload()
                            })
                            .catch(function(error){
                                console.log(error)
                            })
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        // this.auditings.pass = false
                        // console.log(this.auditings)
                        // this.data9[index].auditings.push(this.auditings)
                        // console.log(this.data9[index])
                        // this.$http.put('http://192.168.0.94:8763/lend/v1/waitAuditedExamine',this.data9[index])
                        //     .then(function(respone){
                        //         console.log(respone)
                        //     })
                        //     .catch(function(error){
                        //         console.log(error)
                        //     })
                        this.$Message.info('Clicked cancel');
                    },
                    render: (h) => {
                        return h('div',[
                                    h('h1', 'hello world'
                                    ),
                                    h('h3', '预计借款日期：'+this.data9[index].estimateTime),
                                    h('h3', '借款人：'+this.data9[index].borrower),
                                    h('h3', '负责人：'+this.data9[index].charge),
                                    h('h3', '借款方式：'+this.data9[index].wayOfBorrowing),
                                    h('h3', '参与人：'+this.data9[index].participants),
                                    h('h3', '地区：'+this.data9[index].area),
                                    h('h3', '项目组名称：'+this.data9[index].projectName),
                                    h('h3', '一级科目：'+this.data9[index].classA),
                                    h('h3', '二级科目：'+this.data9[index].classB),
                                    h('h3', '三级科目：'+this.data9[index].classC),
                                    h('h3', '总金额：'+this.data9[index].money+'元'),
                                    h('h3', '借款事由：'+this.data9[index].reason),
                                    h('h3', '商品链接：'+this.data9[index].link),
                                    h('Input', {
                                        props: {
                                            value: this.data9[index].auditings[0].reimbursement,
                                            autofocus: true,
                                            placeholder: '报销金额'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].reimbursement = val;
                                            }
                                        }
                                    }),
                                    h('Input', {
                                        props: {
                                            value: this.data9[index].auditings[0].borrowMoney,
                                            autofocus: true,
                                            placeholder: '借款金额'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].borrowMoney = val;
                                            }
                                        }
                                    }),
                                    h('Input', {
                                        props: {
                                            value: this.data9[index].auditings[0].sendBack,
                                            autofocus: true,
                                            placeholder: '退回金额'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].sendBack = val;
                                            }
                                        }
                                    }),
                                    h('DatePicker', {
                                        props: {
                                            value: this.data9[index].auditings[0].returnDate,
                                            autofocus: true,
                                            placeholder: '归还日期'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].returnDate = val;
                                            }
                                        }
                                    }),
                                    h('Input', {
                                        props: {
                                            value: this.data9[index].auditings[0].restitution,
                                            autofocus: true,
                                            placeholder: '归还方式'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].restitution = val;
                                            }
                                        }
                                    }),
                                    h('Input', {
                                        props: {
                                            value: this.data9[index].auditings[0].account,
                                            autofocus: true,
                                            placeholder: '归还账户'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].account = val;
                                            }
                                        }
                                    }),
                                
                        ])
                        
                    }
                })
            },
            show5 (index) {
                this.$Modal.confirm({
                    okText: '确认',
                    cancelText: '取消',
                    onOk: () => {
                        this.auditings.pass = true
                        console.log(this.auditings)
                        this.data9[index].auditings.push(this.auditings)
                        console.log(this.data9[index])
                        this.$http.put('http://192.168.0.94:8763/lend/v1/waitRepayment',this.data9[index])
                            .then(function(respone){
                                console.log(respone)
                                location.reload()
                            })
                            .catch(function(error){
                                console.log(error)
                            })
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        
                        this.$Message.info('Clicked cancel');
                    },
                    render: (h) => {
                        return h('div',[
                                    h('h1', 'hello world'
                                    ),
                                    h('h3', '预计借款日期：'+this.data9[index].estimateTime),
                                    h('h3', '借款人：'+this.data9[index].borrower),
                                    h('h3', '负责人：'+this.data9[index].charge),
                                    h('h3', '借款方式：'+this.data9[index].wayOfBorrowing),
                                    h('h3', '参与人：'+this.data9[index].participants),
                                    h('h3', '地区：'+this.data9[index].area),
                                    h('h3', '项目组名称：'+this.data9[index].projectName),
                                    h('h3', '一级科目：'+this.data9[index].classA),
                                    h('h3', '二级科目：'+this.data9[index].classB),
                                    h('h3', '三级科目：'+this.data9[index].classC),
                                    h('h3', '总金额：'+this.data9[index].money+'元'),
                                    h('h3', '借款事由：'+this.data9[index].reason),
                                    h('h3', '商品链接：'+this.data9[index].link),
                                    h('h3', '报销金额：'+this.data9[index].auditings[0].reimbursement),
                                    h('h3', '借款金额：'+this.data9[index].auditings[0].borrowMoney),
                                    h('h3', '退回金额：'+this.data9[index].auditings[0].sendBack),
                                    h('h3', '归还日期：'+this.data9[index].auditings[0].returnDate),
                                    h('h3', '归还方式：'+this.data9[index].auditings[0].restitution),
                                    h('h3', '归还账户：'+this.data9[index].auditings[0].account),
                                    h('Input', {
                                        props: {
                                            value: this.data9[index].auditings[0].auditorModule,
                                            autofocus: true,
                                            placeholder: '审核人模块'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].auditorModule = val;
                                            }
                                        }
                                    }),
                                    h('Input', {
                                        props: {
                                            value: this.data9[index].auditings[0].verification,
                                            autofocus: true,
                                            placeholder: '核对情况'
                                        },
                                        style: {
                                            marginTop: '15px'
                                        },
                                        on: {
                                            input: (val) => {
                                                this.data9[index].auditings[0].verification = val;
                                            }
                                        }
                                    }),
                                    
                                
                        ])
                        
                    }
                })
            },
            remove (id) {
                var _this = this;
                _this.loading = true
                // this.data9.splice(index, 1);
                // console.log('http://192.168.0.94:8763/lend/v1/deleteOne/'+index)
                this.$http.delete('http://192.168.0.94:8763/lend/v1/deleteOne/'+id)
                    .then(function(respone){
                        console.log(respone)
                        location.reload()
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                // this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/1')
                //     .then(function(respone){
                //             // var _this = this;
                //         console.log(respone.data.data.content);
                //         _this.data9 = respone.data.data.content
                //         _this.total = respone.data.data.totalSize
                //         _this.loading = false
                //     })
                //     .catch(function(error){
                //         console.log(error)
                //     })
            },
            handleSubmit (name) {
                var _this = this
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        console.log(this.formValidate)
                        this.$http.post('http://192.168.0.94:8763/lend/v1/saveOne',this.formValidate)
                            .then(function(respone){
                                _this.loading = true
                                // location.reload()
                                // console.log(respone)
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                        _this.name = "name1"
                        this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.date.date.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            dateChange (date) {
                console.log(date)
                this.formValidate.estimateTime = date
            },
            menu (name) {
                var _this = this;
                _this.loading = true
                // console.log(columns10.test)
                if (name=="1-2") {
                    this.cai = "1-2"
                    this.see = false
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '审核详情'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'分析')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/waitAnalysis/1')
                    .then(function(respone){
                            // var _this = this;
                        console.log(respone.data.data.content);
                        _this.data9 = respone.data.data.content
                        _this.total = respone.data.data.totalSize
                        _this.loading = false
                    })
                    .catch(function(error){
                        console.log(error)
                    })


                }else if (name=="1-1") {
                    this.cai = "1-1"
                    // _this.loading = true
                    this.see = true
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.showl(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                },'审核')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/waitAudit/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                }else if (name=="1-3") {
                    this.cai = "1-3"
                    this.see = false
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.remove(params.index)
                                            this.show2(params.index)
                                        }
                                    }
                                }, '付款'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'审核详情')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/waitPayment/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                }else if (name=="1-4") {
                    this.cai = "1-4"
                    this.see = false
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show3(params.index)
                                            // this.remove(params.index)
                                        }
                                    }
                                }, '确认收款'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'审核详情')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/waitConfirm/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                }else if (name=="1-5") {
                    this.cai = "1-5"
                    this.see = false
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '寄件'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show4(params.index)
                                        }
                                    }
                                }, '还款'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'审核详情')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/waitRepayment/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                }else if (name=="1-6") {
                    this.cai = "1-6"
                    this.see = false
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show5(params.index)
                                        }
                                    }
                                }, '核对'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'审核详情')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/waitCheck/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                }else if (name=="1-7") {
                    this.cai = "1-7"
                    this.see = false
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '寄件信息'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'审核详情')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/Completed/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })

                }else if (name=="1-8") {
                    this.cai = "1-8"
                    this.see = false
                    this.columns10 = [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user'
                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'审核详情')
                            ]);
                        }
                    }
                ]
                this.$http.get('http://192.168.0.94:8763/lend/v1/errorRecord/1')
                        .then(function(respone){
                                // var _this = this;
                            console.log(respone.data.data.content);
                            _this.data9 = respone.data.data.content
                            _this.total = respone.data.data.totalSize
                            _this.loading = false
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                }
            }
        }
    }
</script>