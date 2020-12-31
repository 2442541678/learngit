import React from 'react'
import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import './Rates.css'

const desc = ['非常差', '差', '一般', '满意', '非常满意'];
const desc1 = ['非常差', '差', '一般', '满意', '非常满意'];
const desc2 = ['非常差', '差', '一般', '满意', '非常满意'];

export default class Rates extends React.Component {
    state = {
        value: 3,
    };
    handleChange = value => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <div className="ddiivv">
                <Rate className="ra01" tooltips={desc} onChange={this.handleChange} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                <br/>
                <Rate className="ra02" character={<HeartOutlined />} allowHalf />
                <br />
                <Rate className="ra02"character="A" allowHalf style={{ fontSize: 36 }} />
                <br />
                <Rate className="ra02" character="好" allowHalf />
            </div>
        );
    }
}