import React, {useContext} from "react";
import {Modal} from 'antd';
import {PopUpContext} from "../../contexts/PopUpContext";

const PopUp: React.FC = () => {

    const {isPopUpOpen, onClosePopUp} = useContext(PopUpContext);

    return (
        <Modal
            visible={isPopUpOpen}
            title='Lorem Ipsum'
            onOk={() => onClosePopUp()}
            onCancel={() => onClosePopUp()
            }>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi id lorem semper dapibus. Maecenas et diam felis. Maecenas iaculis vehicula justo et efficitur.</p>
        </Modal>
    )
};

export default PopUp;