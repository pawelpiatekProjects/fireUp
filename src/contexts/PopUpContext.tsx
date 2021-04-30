import React, {useState, createContext} from "react";

interface ContextType {
    isPopUpOpen: boolean;
    onOpenPopUp: () => void;
    onClosePopUp: () => void;
}

export const PopUpContext = createContext({} as ContextType);

const PopUpContextProvider: React.FC = ({children}) => {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const onOpenPopUp = () => {
        setIsPopUpOpen(true);
    }

    const onClosePopUp = () => {
        setIsPopUpOpen(false);
    }

    return (
        <PopUpContext.Provider value={{
            isPopUpOpen,
            onOpenPopUp,
            onClosePopUp
        }}>
            {children}
        </PopUpContext.Provider>
    )
}

export default PopUpContextProvider;