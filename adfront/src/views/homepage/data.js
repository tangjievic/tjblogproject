//此部分放固定的数据类型
let listMenuArray =[
    {
        tilte:"管理员类",
        pathname:'adminlist',
        icon:'user',
        childs:[]
    },
    {
        tilte:"用户管理",
        pathname:'user',
        icon:'team',
        childs:[]
    },
    {
        tilte:"VIP管理",
        pathname:'vipuser',
        icon:'github',
        childs:[]
    },
    {
        tilte:"博客文章",
        pathname:'',
        icon:'read',
        childs:[
            {
                c_tilte:'分类/标签',
                pathname:'catepage'
            },
            {
                c_tilte:'文章列表',
                pathname:'artlist'
            },
            {
                c_tilte:'文章写作',
                pathname:'addart'
            }
        ]
    },
    {
        tilte:"商品管理",
        pathname:'',
        icon:'shop',
        childs:[
            {
                c_tilte:'商品列表',
                pathname:'goodslist'
            },
            {
                c_tilte:'商品添加',
                pathname:'goodsadd'
            },
        ]
    },
    {
        tilte:"活动/通知",
        pathname:'',
        icon:'notification',
        childs:[
            {
                c_tilte:'活动管理',
                pathname:'notice'
            },
        ]
    },
    {
        tilte:"系统杂项",
        pathname:'',
        icon:'snippets',
        childs:[
            {
                c_tilte:'轮播图管理',
                pathname:'sliderpage'
            },
            {
                c_tilte:'广告图位',
                pathname:'addgoods'
            },
        ]
    },
    // {
    //     tilte:"员工管理",
    //     pathname:"",
    //     icon:"user-add",
    //     childs:[
    //         {
    //             c_tilte:'暂存员工列表',
    //             pathname:'tempstaff'
    //         },
    //         {
    //             c_tilte:'正式员工列表',
    //             pathname:'formalstaff'
    //         },
    //         {
    //             c_tilte:'员工录入',
    //             pathname:'addstaff'
    //         }
    //     ]
    // }
]

export {
    listMenuArray
}