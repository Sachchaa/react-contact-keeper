import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import { Alert } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'

const Alerts = () => {

    const alertContext = useContext(AlertContext)
    return (
        alertContext.alerts.length > 0 &&
        alertContext.alerts.map(alert => (
            <Alert key={alert.id} variant={alert.type}>
                <i><FaInfoCircle /> </i>{alert.msg}
            </Alert>
        ))
    )
}

export default Alerts