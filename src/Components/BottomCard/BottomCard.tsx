import React from "react";
import {Col, Row, Typography} from 'antd';
import {data} from './bottomCardData';
import {BottomCardWrapper} from './BottomCardStyles';

const {Title, Paragraph} = Typography;

/**
 * Component which is displayed next to Carousel and contains list of paragraphs from 'bottomCardData'.
 * */
const BottomCard: React.FC = () => {
    return (
        <>
            <BottomCardWrapper>
                <Title type='warning' level={1}>Title</Title>
                {data.map((element, index) => (
                    <Row gutter={[0, 20]} align='middle' key={index} style={{marginBottom: '1rem'}}>
                        <Col span={1}>
                            <Title type='warning' level={2}>{index + 1}</Title>
                        </Col>
                        <Col span={18} offset={2}>
                            <Paragraph>{element}</Paragraph>
                        </Col>
                    </Row>
                ))}
            </BottomCardWrapper>
        </>
    )
}

export default BottomCard;