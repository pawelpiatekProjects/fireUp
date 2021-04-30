import React, {useState, createContext} from "react";

interface PopUpConfig {
    header: string;
    message: string;
}

interface ContextType {
    isPopUpOpen: boolean;
    popUpConfig: PopUpConfig;
    onOpenPopUp: (popUpConfig: PopUpConfig) => void;
    onClosePopUp: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [popUpConfig, setPopUpConfig] = useState({} as PopUpConfig);

    const onOpenPopUp = (popupConfig: PopUpConfig) => {
        setPopUpConfig(popupConfig);
        setIsPopUpOpen(true);
    }

    const onClosePopUp = () => {
        setIsPopUpOpen(false);
        setPopUpConfig({} as PopUpConfig);
    }

    return (
        <PopUpContext.Provider value={{
            isPopUpOpen,
            popUpConfig,
            onOpenPopUp,
            onClosePopUp
        }}>
            {children}
        </PopUpContext.Provider>
    )
}

export default PopUpContextProvider;