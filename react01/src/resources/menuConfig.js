// 这里暴露出的是左侧菜单列表的资源
const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: "UI",
        key: '/home/ui',
        children: [
            {
                title: '按钮',
                key: '/home/ui/buttons'
            },
            {
                title: 'Loading',
                key: '/home/ui/loading'
            },
            {
                title: '通知提醒',
                key: '/home/ui/notice'
            },

            {
                title: '轮播图',
                key: '/home/ui/carousel'
            }
        ]
    },
    {
        title: '表格',
        key: '/home/table'
    },
    {
        title: '富文本',
        key: '/home/rich'
    },
    {
        title: '图片',
        key: '/home/picture'
    },
    {
        title: '评分',
        key: '/home/rate'
    },
    {
        title: '日历',
        key: '/home/calendar'
    },
    {
        title: '图表',
        key: '/home/tubiao'
    }


];
export default menuList;