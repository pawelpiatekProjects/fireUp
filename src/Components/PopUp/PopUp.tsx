import React, {useContext} from "react";
import {Modal} from 'antd';
import {PopUpContext} from "../../contexts/PopUpContext";

const PopUp: React.FC = () => {

    const {isPopUpOpen, onClosePopUp, popUpConfig} = useContext(PopUpContext);

    return (
        <Modal
            visible={isPopUpOpen}
            title={popUpConfig.header}
            onOk={() => onClosePopUp()}
            onCancel={() => onClosePopUp()
            }>
            <p>{popUpConfig.message}</p>
        </Modal>
    )
};

export default PopUp;