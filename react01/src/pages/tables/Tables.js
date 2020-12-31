import React from 'react'
import { Table, Tag, Space } from 'antd'


export default class Tables extends React.Component {
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a>{text}</a>,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                // align: 'center'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render: (sex)=> sex==1 ? '男' : '女',
            },
            {
                title: '标签',
                dataIndex: 'tags',
                key: 'tags',
                render: (tags) => (
                    <>
                        {tags.map((item) => {
                            let color = item.length > 5 ? 'geekblue' : 'green'
                            if (item === 'loser') {
                                color = '#a3e'
                            }
                            return (
                                <Tag color={color} key={item}>
                                    {item.toUpperCase()}
                                </Tag>
                            )
                        })}
                    </>
                ),

            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a>锤{record.name}一顿</a>
                        <a>删除</a>
                    </Space>
                )
            },
            {
                title: '数',
                dataIndex: 'degree',
                key: 'degree',
                render: (degree) => (
                    <>
                        {degree.map((item) => {
                            let color = item > 50 ? "geekblue" : "green";
                            if (item < 49) {
                                color = "volcano";
                            }
                            return (
                                <Tag color={color} key={item}>
                                    {item.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                )
            },
            {
                title: "国家",
                key: "country",
                dataIndex: "country",
                render: (country) => (
                    <>
                        {country.map((item) => {
                            let color = item.length > 2 ? "geekblue" : "green";
                            if (item === "中国") {
                                color = "volcano";
                            }
                            return (
                                <Tag color={color} key={item}>
                                    {item.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                )
            },
        ]
        const data = [
            {
                key: '1',
                name: 'Aaa',
                age: 32,
                address: '月球西',
                sex: 1,
                tags: ['666','888'],
                degree: ["50", "61"],
                country: ["中国", "美国"],
            },
            {
                key: '2',
                name: 'Bbb',
                age: 42,
                address: '火星奥林匹斯山',
                sex: 0,
                tags: ['111'],
                degree: ["88", "30", "44"],
                country: ["俄罗斯", "日本", "韩国"],
            },
            {
                key: '3',
                name: 'Ccc',
                age: 32,
                address: '太阳内核',
                sex: 1,
                tags: ['biubiubiu', 'hahaha','zzz'],
                degree: ["55", "66"],
                country: ["巴基斯坦", "非洲众国"],
            },
        ]

        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
