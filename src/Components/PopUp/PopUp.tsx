import React, {useContext} from "react";
import {PopUpContext} from "../../contexts/PopUpContext";
import {Wrapper, Modal, Backdrop, ModalHeader, ModalContent, ButtonsRow} from './PopUpStyles';
import {Button} from 'antd';

/** Component which contains Modal which is controlled by PopUpContext */
const PopUp: React.FC = () => {

    const {isPopUpOpen, onClosePopUp, popUpConfig} = useContext(PopUpContext);

    return (
        <Wrapper isOpen={isPopUpOpen}>
            <Modal >
                <ModalHeader>{popUpConfig.header}</ModalHeader>
                <ModalContent>{popUpConfig.message}</ModalContent>
                <ButtonsRow>
                    <Button onClick={() => onClosePopUp()}>Cancel</Button>
                    <Button onClick={() => onClosePopUp()} type='primary'>Ok</Button>
                </ButtonsRow>
            </Modal>
            <Backdrop/>
        </Wrapper>
    )
};

export default PopUp;