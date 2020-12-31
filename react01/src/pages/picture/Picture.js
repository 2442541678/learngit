import React from 'react';
import { Image } from 'antd';
import Tu01 from '../../resources/image/tu01.png'
import Tu02 from '../../resources/image/tu02.jpeg'
import Tu03 from '../../resources/image/tu03.jpg'
import Tu04 from '../../resources/image/tu04.jpeg'
import Tu05 from '../../resources/image/tu05.jpeg'
import Tu06 from '../../resources/image/tu06.png'
import Tu07 from '../../resources/image/tu07.jpg'
import Tu08 from '../../resources/image/tu08.jpg'
import Tu09 from '../../resources/image/tu09.jpg'
import Tu10 from '../../resources/image/tu10.jpg'
import Yan01 from '../../resources/image/yan01.jpg'
import Yan02 from '../../resources/image/yan02.jpeg'
import Aa01 from '../../resources/image/aa01.jpg'
import Aa02 from '../../resources/image/aa02.jpg'

// import './Picture.css'

export default class Picture extends React.Component {
    render() {
        return (
            <Image.PreviewGroup>
                {/*style={{marginLeft: '10px'}}*/}
                <Image class="img" width={189} src={Tu02} />
                <Image class="img" width={189} src={Tu03} />
                <Image class="img" width={189} src={Tu04} />
                <Image class="img" width={189} src={Tu05} />
                <Image class="img" width={189} src={Tu06} />
                <Image class="img" width={189} src={Tu07} />
                <Image class="img" width={189} src={Tu08} />
                <Image class="img" width={193} src={Tu09} />
                <Image class="img" width={193} src={Tu10} />
                <Image class="img" width={193} src={Tu01} />
                <Image class="img" width={170} src={Yan01} />
                <Image class="img" width={183} src={Yan02} />
                <Image class="img" width={200} src={Aa02} />
                <Image class="img" width={190} src={Aa01} />
                {/*<Image class="img" width={180} src={Tu02} style={{marginLeft: '10px'}} />*/}
                {/*<Image class="img" width={180} src={Tu03} style={{marginLeft: '20px'}} />*/}
                {/*<Image class="img" width={180} src={Tu04} style={{marginLeft: '30px'}} />*/}
                {/*<Image class="img" width={180} src={Tu05} style={{marginLeft: '40px'}} />*/}
                {/*<Image class="img" width={180} src={Tu06} style={{marginLeft: '50px'}} />*/}
                {/*<Image class="img" width={180} src={Tu07} style={{marginLeft: '60px'}} />*/}
                {/*<Image class="img" width={180} src={Tu08} style={{marginLeft: '70px'}} />*/}
                {/*<Image class="img" width={180} src={Tu09} style={{marginLeft: '10px'}} />*/}
                {/*<Image class="img" width={180} src={Tu10} style={{marginLeft: '20px'}} />*/}
                {/*<Image class="img" width={180} src={Tu01} style={{marginLeft: '30px'}} />*/}
                {/*<Image class="img" width={165} src={Yan01} style={{marginLeft: '40px'}} />*/}
                {/*<Image class="img" width={180} src={Yan02} style={{marginLeft: '50px'}} />*/}
                {/*<Image class="img" width={195} src={Aa02} style={{marginLeft: '60px'}} />*/}
                {/*<Image class="img" width={180} src={Aa01} style={{marginLeft: '70px'}} />*/}
            </Image.PreviewGroup>
        )
    }
}

