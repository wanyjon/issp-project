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
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                借款管理
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                报销管理
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <!-- <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                I
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu> -->
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        
                        <Tabs value="name1">
                            <TabPane label="列表" name="name1">

                                <div style="margin-bottom: 15px">
                                    <Button @click="handleSelectAll(true)">add</Button>
                                    <Button @click="handleSelectAll(false)">delec</Button>
                                </div>
                                <Table ref="selection" border :columns="columns7" :data="data6" @on-select="select"></Table>
                            </TabPane>
                            <TabPane label="添加" name="name2">
                                <Row>
                                    <Col span="10">
                                        <div>
                                            <Form :model="formItem" :label-width="80">
                                                <FormItem label="Input">
                                                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                                                </FormItem>
                                                <FormItem label="Select">
                                                    <Select v-model="formItem.select">
                                                        <Option value="beijing">New York</Option>
                                                        <Option value="shanghai">London</Option>
                                                        <Option value="shenzhen">Sydney</Option>
                                                    </Select>
                                                </FormItem>
                                                <FormItem label="DatePicker">
                                                    <Row>
                                                        <Col span="11">
                                                            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                                                        </Col>
                                                        <Col span="2" style="text-align: center">-</Col>
                                                        <Col span="11">
                                                            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                                                        </Col>
                                                    </Row>
                                                </FormItem>
                                                <FormItem label="Radio">
                                                    <RadioGroup v-model="formItem.radio">
                                                        <Radio label="male">Male</Radio>
                                                        <Radio label="female">Female</Radio>
                                                    </RadioGroup>
                                                </FormItem>
                                                <FormItem label="Checkbox">
                                                    <CheckboxGroup v-model="formItem.checkbox">
                                                        <Checkbox label="Eat"></Checkbox>
                                                        <Checkbox label="Sleep"></Checkbox>
                                                        <Checkbox label="Run"></Checkbox>
                                                        <Checkbox label="Movie"></Checkbox>
                                                    </CheckboxGroup>
                                                </FormItem>
                                                <FormItem label="Switch">
                                                    <i-switch v-model="formItem.switch" size="large">
                                                        <span slot="open">On</span>
                                                        <span slot="close">Off</span>
                                                    </i-switch>
                                                </FormItem>
                                                <FormItem label="Slider">
                                                    <Slider v-model="formItem.slider" range></Slider>
                                                </FormItem>
                                                <FormItem label="Text">
                                                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                                </FormItem>
                                                <FormItem>
                                                    <Button type="primary">Submit</Button>
                                                    <Button type="ghost" style="margin-left: 8px">Cancel</Button>
                                                </FormItem>
                                            </Form>
                                        </div>
                                    </Col>
                                    
                                </Row>
                                
                            </TabPane>
                            <!-- <TabPane label="标签三" name="name3">标签三的内容</TabPane> -->
                        </Tabs>
                        <!-- <Table ref="selection" border :columns="columns7" :data="data6" @on-select="select"></Table> -->
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [+

                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
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
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            select (selection,row) {
                console.log(selection)
            }
        }
        
    }
</script>