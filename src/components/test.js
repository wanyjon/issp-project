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

var columns = [
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

export default {

    test: columns10,

    columns: columns

}