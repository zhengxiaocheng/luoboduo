// 搜索面板;
angular.module('myApp')
    .constant('searchOptions', {
        options: [
            {
                CNname: '所在地区',
                name: 'province',
                value: [
                    {type: '', name: '不限', choose: true},
                    {type: 0, name: '北京', choose: false}
                ]
            },
            {
                CNname: '职位类别',
                name: 'category',
                value: [
                    {name: '不限', choose: true},
                    {type: 1, name: '产品', choose: false},
                    {type: 2, name: 'UI', choose: false},
                    {type: 3, name: 'QA', choose: false},
                    {type: 4, name: 'Android', choose: false},
                    {type: 5, name: 'IOS', choose: false},
                    {type: 6, name: 'WEB', choose: false},
                    {type: 7, name: 'OP', choose: false},
                    {type: 8, name: 'Java', choose: false},
                    {type: 9, name: 'NLP', choose: false},
                    {type: 10, name: 'DM', choose: false},
                    {type: 11, name: 'DL', choose: false}
                ]
            },

            {
                CNname: '所属行业',
                name: 'industry',
                value: [
                    {type: '', name: '不限', choose: true},
                    {type: 0, name: '移动互联网', choose: false},
                    {type: 1, name: '电子商务', choose: false},
                    {type: 2, name: '企业服务', choose: false},
                    {type: 3, name: 'O2O', choose: false},
                    {type: 4, name: '教育', choose: false},
                    {type: 5, name: '金融', choose: false},
                    {type: 6, name: '游戏', choose: false}
                ]
            },
            {
                CNname: '薪资待遇',
                name: 'compensation',
                value: [
                    {type: '', name: '不限', choose: true},
                    {type: 0, name: '8K以下', choose: false},
                    {type: 1, name: '8K-15K', choose: false},
                    {type: 2, name: '16K-25K', choose: false},
                    {type: 3, name: '25K以上', choose: false}
                ]
            },
            {
                CNname: '学历要求',
                name: 'education',
                value: [
                    {type: '', name: '不限', choose: true},
                    {type: 0, name: '大专', choose: false},
                    {type: 1, name: '本科', choose: false},
                    {type: 2, name: '硕士', choose: false},
                    {type: 3, name: '博士及以上', choose: false}
                ]
            },
            {
                CNname: '工作经验',
                name: 'experience',
                value: [
                    {type: '', name: '不限', choose: true},
                    {type: 0, name: '应届', choose: false},
                    {type: 1, name: '1~2年', choose: false},
                    {type: 2, name: '3~5年', choose: false},
                    {type: 3, name: '6～9年', choose: false},
                    {type: 4, name: '10年及以上', choose: false}
                ]
            },
            {
                CNname: '发布时间',
                name: 'province',
                value: [
                    {type: '', name: '不限', choose: true},
                    {type: 0, name: '24h内', choose: false},
                    {type: 1, name: '三天内', choose: false},
                    {type: 2, name: '七天内', choose: false}
                ]
            }

        ]
    })
    // 搜索职位类别二级数据
    .constant('subCategory', [
        {
            subCategory: [
                {
                    name: "产品",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '助理', choose: false},
                        {type: 2, name: '初级', choose: false},
                        {type: 3, name: '中级', choose: false},
                        {type: 4, name: '高级', choose: false},
                        {type: 5, name: '总监', choose: false}]
                },
                {
                    name: "UI",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false},
                        {type: 4, name: '总监', choose: false}
                    ]
                },
                {
                    name: "QA",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                },
                {
                    name: "Android",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                },
                {
                    name: "IOS",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                },
                {
                    name: "WEB",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                },
                {
                    name: "OP",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                },
                {
                    name: "Java",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false},
                        {type: 4, name: '总监', choose: false}
                    ]
                },
                {
                    name: "NLP",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                },
                {
                    name: "DM",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                },
                {
                    name: "DL",
                    data: [{name: '不限', choose: true},
                        {type: 1, name: '初级', choose: false},
                        {type: 2, name: '中级', choose: false},
                        {type: 3, name: '高级', choose: false}
                    ]
                }
            ]
        }
    ])
    // 公司搜搜
    .constant('companyOptions', {
        options: [
            {
                CNname: '发布时间',
                name: 'updateAt',
                value: [
                    {type: 0, name: '不限', choose: true},
                    {type: 1, name: '北京', choose: false}
                ]
            },
            {
                CNname: '发布时间',
                name: 'industry',
                value: [
                    {type: 0, name: '不限', choose: true},
                    {type: 1, name: '移动互联网', choose: false},
                    {type: 2, name: '电子商务', choose: false},
                    {type: 3, name: '企业服务', choose: false},
                    {type: 4, name: 'O2O', choose: false},
                    {type: 5, name: '教育', choose: false},
                    {type: 6, name: '金融', choose: false},
                    {type: 7, name: '游戏', choose: false}
                ]
            },
            {
                CNname: '发布时间',
                name: 'financing',
                value: [
                    {type: 0, name: '不限', choose: true},
                    {type: 1, name: '无需融资', choose: false},
                    {type: 2, name: '天使轮', choose: false},
                    {type: 3, name: 'A轮', choose: false},
                    {type: 4, name: 'B轮', choose: false},
                    {type: 5, name: 'C轮', choose: false},
                    {type: 6, name: 'D轮及以上', choose: false},
                    {type: 7, name: '上市公司', choose: false}
                ]
            }
        ]
    })
    // begin 找职位面板的分类列表
    .constant('searchType', [
        {
            "jobType": 1,
            "name": "用户体验",
            "jobTypeList": [
                {
                    "secondType": 1,
                    "name": "产品",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "助理"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 4,
                            "jobName": "高级"
                        },
                        {
                            "thirdType": 5,
                            "jobName": "总监"
                        }
                    ]
                },
                {
                    "secondType": 2,
                    "name": "UI",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        },
                        {
                            "thirdType": 4,
                            "jobName": "总监"
                        }
                    ]
                },
                {
                    "secondType": 3,
                    "name": "QA",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                }
            ]
        },
        {
            "jobType": 2,
            "name": "研发",
            "jobTypeList": [
                {
                    "secondType": 4,
                    "name": "Android",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                },
                {
                    "secondType": 5,
                    "name": "IOS",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                },
                {
                    "secondType": 6,
                    "name": "WEB",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                },
                {
                    "secondType": 7,
                    "name": "OP",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                },
                {
                    "secondType": 8,
                    "name": "Java",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        },
                        {
                            "thirdType": 4,
                            "jobName": "总监"
                        }
                    ]
                }
            ]
        },
        {
            "jobType": 3,
            "name": "大数据",
            "jobTypeList": [
                {
                    "secondType": 9,
                    "name": "NLP",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                },
                {
                    "secondType": 10,
                    "name": "DM",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                },
                {
                    "secondType": 11,
                    "name": "DL",
                    "secondTypeList": [
                        {
                            "thirdType": 1,
                            "jobName": "初级"
                        },
                        {
                            "thirdType": 2,
                            "jobName": "中级"
                        },
                        {
                            "thirdType": 3,
                            "jobName": "高级"
                        }
                    ]
                }
            ]
        }
    ])
    // end 找职位面板的分类列表


    //  begin 独立过滤器所需
    //薪资水平
    .constant('compensationType', [
        {type: 0, name: '8K以下', choose: false},
        {type: 1, name: '8K-15K', choose: false},
        {type: 2, name: '16K-25K', choose: false},
        {type: 3, name: '25K以上', choose: false}
    ])
    //公司行业
    .constant('industrytype', [
        {type: 0, name: '移动互联网'},
        {type: 1, name: '电子商务'},
        {type: 2, name: '企业服务'},
        {type: 3, name: 'O2O'},
        {type: 4, name: '教育'},
        {type: 5, name: '金融'},
        {type: 6, name: '游戏'}
    ])
    //    融资规模 financing
    .constant('financingtype', [
        {type: 0, name: '无需融资'},
        {type: 1, name: '天使轮'},
        {type: 2, name: 'A轮'},
        {type: 3, name: 'B轮'},
        {type: 4, name: 'C轮'},
        {type: 5, name: 'D轮及以上'},
        {type: 6, name: '上市公司'}
    ])
    //  工作经验 experience
    .constant('experiencetype', [
        {type: 0, name: '应届'},
        {type: 1, name: '1~2年'},
        {type: 2, name: '3~5年'},
        {type: 3, name: '6～9年'},
        {type: 4, name: '10年及以上'}

    ])
    //     学历要求 education
    .constant('educationtype', [
        {type: 0, name: '大专'},
        {type: 1, name: '本科'},
        {type: 2, name: '硕士'},
        {type: 3, name: '博士及以上'}

    ])
    //发布时间 updateAt
    .constant('updateAttype', [
        {type: 0, name: '今天'},
        {type: 1, name: '昨天'}
    ]);









