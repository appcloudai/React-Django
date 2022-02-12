import {useEffect, useState} from 'react'
import axios from 'axios'
export function API(url){
    const [request, setRequest] = useState({
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}
