module.exports = {
     base:'/Aisaka/',
    title: 'Aisaka UI',
    description: '一个UI 框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '交流', link: 'https://github.com/liyiaiai230'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },

            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            },


        ]
    }
}