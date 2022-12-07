import React, { useEffect, useState } from 'react'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'
import coastersService from "../../services/coaster.services"

export const Saludo = () => {

    const [greeting, setGreeting] = useState(null)

    useEffect(() => {
        coastersService
            .saludo()
            .then(({ data }) => setGreeting(data))
            .catch(err => console.log(err))
    }, [])

    return (
        !greeting
            ?
            <>
                ...Loading
            </>
            :
            <>
                {greeting}
            </>
    )
}
