import React, { createContext, useState } from 'react';

interface Notification {
    message: string;
    type: string;
}
// Define the shape of the user object
interface UserContextProp {
    theme: string;
    setTheme: (theme: string) => void;
    language: string;
    setLanguage: (language: string) => void;
    notifications: Notification[];
    addNotification: (notification: Notification) => void;
    removeNotification: (index: number) => void;
}


export const UserContext = createContext<UserContextProp>({
    theme: 'light',
    setTheme: () => {},
    language: 'en',
    setLanguage: () => {},
    notifications: [],
    addNotification: () => {},
    removeNotification: () => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        setNotifications([...notifications, notification]);
    };

    const removeNotification = (index: number) => {
        const newNotifications = [...notifications];
        newNotifications.splice(index, 1);
        setNotifications(newNotifications);
    };

    return (
        <UserContext.Provider
            value={{
                theme,
                setTheme,
                language,
                setLanguage,
                notifications,
                addNotification,
                removeNotification,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;