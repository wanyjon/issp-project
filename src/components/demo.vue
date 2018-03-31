<style scoped>
    img {
        width: 50%;
        height: 50%;
        border-radius: 100%;
    }
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
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <div align="center" style="margin-top: 15px;margin-bottom: 15px">
                    <img src="@/assets/1028945360.jpg">
                    <h2 style="color: white">wany</h2>
                    <Button type="primary">info</Button>

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
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                报销管理
                            </template>
                            <MenuItem name="2-1">待审核</MenuItem>
                            <MenuItem name="2-2">待分析</MenuItem>
                        </Submenu>
                        <!-- <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu> -->
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px',padding: '20px'}">
                    <Tabs>
                        <TabPane label="列表" icon="navicon">
                            <Table :columns="columns10" :data="data9"></Table>
                            <div style="margin-top: 15px">
                                <Button style="margin-right: 5px">这是一个无所事事的按钮</Button>
                                <Poptip
                                    confirm
                                    title="您确认删除这些内容吗？"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <Button type="error">批量删除</Button>
                                </Poptip>
                            </div>
                            
                        </TabPane>
                        <TabPane label="添加" icon="plus" v-if="show">
                            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" label-position="top">
                            <Row :gutter="16">
                                <Col span="4">
                                    <div>
                                        
                                            <FormItem label="借款人" prop="name">
                                                <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                                            </FormItem>
                                            <FormItem label="负责人" prop="mail">
                                                <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                                            </FormItem>
                                            <FormItem label="借款方式" prop="city">
                                                <Select v-model="formValidate.city" placeholder="Select your city">
                                                    <Option value="beijing">现金</Option>
                                                    <Option value="shanghai">公司代购</Option>
                                                    <Option value="shenzhen">转账</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="预计借款时间">
                                                <Row>
                                                    <Col span="24">
                                                        <FormItem prop="date">
                                                            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                                        </FormItem>
                                                    </Col>
                                                    <!-- <Col span="2" style="text-align: center">-</Col>
                                                    <Col span="11">
                                                        <FormItem prop="time">
                                                            <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                                                        </FormItem>
                                                    </Col> -->
                                                </Row>
                                            </FormItem>
                                            <FormItem label="Gender" prop="gender">
                                                <RadioGroup v-model="formValidate.gender">
                                                    <Radio label="male">Male</Radio>
                                                    <Radio label="female">Female</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="Hobby" prop="interest">
                                                <CheckboxGroup v-model="formValidate.interest">
                                                    <Checkbox label="Eat"></Checkbox>
                                                    <Checkbox label="Sleep"></Checkbox>
                                                    <Checkbox label="Run"></Checkbox>
                                                    <Checkbox label="Movie"></Checkbox>
                                                </CheckboxGroup>
                                            </FormItem>
                                            <FormItem label="Desc" prop="desc">
                                                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                            </FormItem>
                                            <!-- <FormItem>
                                                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                                                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                                            </FormItem> -->
                                        <!-- </Form> -->
                                    </div>
                                </Col>
                                <Col span="4">
                                    <div>
                                        <!-- <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" label-position="top"> -->
                                            <FormItem label="参与人">
                                                <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                                            </FormItem>
                                            <FormItem label="地区" prop="mail">
                                                <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                                            </FormItem>
                                            <FormItem label="项目组" prop="mail">
                                                <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                                            </FormItem>
                                            <!-- <FormItem label="借款方式" prop="city">
                                                <Select v-model="formValidate.city" placeholder="Select your city">
                                                    <Option value="beijing">New York</Option>
                                                    <Option value="shanghai">London</Option>
                                                    <Option value="shenzhen">Sydney</Option>
                                                </Select>
                                            </FormItem> -->
                                            <FormItem label="项目名称" prop="mail">
                                                <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                                            </FormItem>
                                            <FormItem label="Gender" prop="gender">
                                                <RadioGroup v-model="formValidate.gender">
                                                    <Radio label="male">Male</Radio>
                                                    <Radio label="female">Female</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="Hobby" prop="interest">
                                                <CheckboxGroup v-model="formValidate.interest">
                                                    <Checkbox label="Eat"></Checkbox>
                                                    <Checkbox label="Sleep"></Checkbox>
                                                    <Checkbox label="Run"></Checkbox>
                                                    <Checkbox label="Movie"></Checkbox>
                                                </CheckboxGroup>
                                            </FormItem>
                                            <FormItem label="Desc" prop="desc">
                                                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                            </FormItem>
                                            <FormItem>
                                                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                                                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                                            </FormItem>
                                        
                                    </div>
                                </Col>
                            </Row>
                            </Form>
                        </TabPane>
                        <!-- <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane> -->
                    </Tabs>
                    
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
var columns10 = [
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
                        key: 'name'
                    },
                    {
                        title: '填单日期',
                        key: 'age'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'address'
                    },
                    {
                        title: '预计借款日期',
                        key: 'address'
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
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'审核')
                            ]);
                        }
                    }
                ];
    var columns101 = [
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
                        key: 'name'
                    },
                    {
                        title: '填单日期',
                        key: 'age'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'address'
                    },
                    {
                        title: '预计借款日期',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                // h('Button', {
                                //     props: {
                                //         type: 'primary',
                                //         size: 'small'
                                //     },
                                //     style: {
                                //         marginRight: '5px'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             this.show(params.index)
                                //         }
                                //     }
                                // }, '编辑'),
                                // h('Button', {
                                //     props: {
                                //         type: 'error',
                                //         size: 'small'
                                //     },
                                //     style: {
                                //         marginRight: '5px'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             this.remove(params.index)
                                //         }
                                //     }
                                // }, '删除'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                },'分析')
                            ]);
                        }
                    }
                ];
    
    // import columns10 from './test.js';
    import expandRow from './table-expand.vue';

    export default {
        components: { expandRow },
        data () {
            return {
                show: true,
                cai: "1-1",
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    // time: [
                    //     { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    // ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                },
                isCollapsed: false,
                columns10: columns10,
                data9: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        job: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        job: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        job: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        job: 'Data Analyst',
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
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data9[index].name}<br>Age：${this.data9[index].age}<br>Address：${this.data9[index].address}`
                })
            },
            remove (index) {
                this.data9.splice(index, 1);
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            menu (name) {
                var _this = this;
                // console.log(columns10.test)
                if (name=="1-2") {
                    _this.show = false
                    _this.columns10 = columns101
                }else if (name=="1-1") {
                    _this.show = true
                    _this.columns10 = columns10
                }
            }
        }
    }
</script>