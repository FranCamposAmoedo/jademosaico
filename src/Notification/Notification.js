import "./Notification.css";
import { createContext, useState, useContext } from "react";

const Notification = ({message, severity}) => {

    if (message === '') {
        return null
    }

    return (
        <div className={`${severity='success'?'Success':'Error'} alert d-flex align-items-center alert-message`}>
          {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (msg, sev) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }


    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}