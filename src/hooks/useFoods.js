import { useEffect, useState } from "react"

const useFoods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://em-red-onion-roaster.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return [foods, setFoods]
}
export default useFoods;