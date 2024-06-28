// PersonalInfoContext.js
import { createContext, useState } from 'react';

export const PersonalInfoContext = createContext();

export const PersonalInfoProvider = ({ children }) => {
    const [personalInfo, setPersonalInfo] = useState(null);

    return (
        <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
            {children}
        </PersonalInfoContext.Provider>
    );
};
