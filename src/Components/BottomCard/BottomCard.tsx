import React from "react";
import {Card, Row, Col, Typography} from 'antd';
import {data} from './bottomCardData';
import {BottomCardWrapper, CardHeader} from './BottomCardStyles';

const {Title, Text} = Typography;

const BottomCard: React.FC = () => {
    return (
        <>
            <BottomCardWrapper>
                <Title type='warning' level={1}>Title</Title>
                {data.map((element, index) => (
                    <Row gutter={[0, 20]} align='middle' key={index}>
                        <Col span={2}>
                            <Title type='warning' level={2}>{index}</Title>
                        </Col>
                        <Col span={18} offset={1}>
                            <Text>{element}</Text>
                        </Col>
                    </Row>

                ))}
            </BottomCardWrapper>
        </>
    )
}

export default BottomCard;