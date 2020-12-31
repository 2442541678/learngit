import React from 'react'
import './Header.css'
import { Carousel } from 'antd';


const contentStyle = {
    height: '100px',
    color: 'red',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#C7F6D5',
    fontSize: '40px',
    fontWeight: 'bold '
};

export default class Header extends React.Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>收破烂请联系:12345678910</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>落魄程序员在线炒粉，炒面，炒饭，9.9包邮;免费加肉丝、火腿肠</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>诚招广告</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>广告位</h3>
                </div>
            </Carousel>
        )
    }
}

