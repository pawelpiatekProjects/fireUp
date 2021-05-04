import React from 'react';
import {Row, Col} from 'antd'
import * as variables from '../../../assets/styles/variables';
import office1 from '../../../assets/images/office1.jpg';
import office2 from '../../../assets/images/office2.jpg';
import office3 from '../../../assets/images/office3.jpg';
import office4 from '../../../assets/images/office4.jpg';
import {Image} from './ImagesRowStyles';

/** Component which displays images with color gradient filters */
const ImagesRow: React.FC = () => {
    return(
        <>
            <Row>
                <Col xl={{span: 20, offset: 2}} md={{span: 20, offset: 2}} sm={{span: 20, offset: 2}} xs={{span: 20, offset: 2}}>
                    <Row gutter={[20,12]}>
                        <Col xl={{span: 6}} md={{span: 12}} sm={{span: 12}} xs={{span: 24}}>
                            <Image img={office1} color={variables.primaryBlue}/>
                        </Col>
                        <Col xl={{span: 6}} md={{span: 12}} sm={{span: 12}} xs={{span: 24}}>
                            <Image img={office2} color={variables.primaryYellow}/>
                        </Col>
                        <Col xl={{span: 6}} md={{span: 12}} sm={{span: 12}} xs={{span: 24}}>
                            <Image img={office3} color={variables.secondaryYellow}/>
                        </Col>
                        <Col xl={{span: 6}} md={{span: 12}} sm={{span: 12}} xs={{span: 24}}>
                            <Image img={office4} color={variables.secondaryBlue}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
};

export default ImagesRow;