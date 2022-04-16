import { useEffect, useState } from "react"

const useFoods = () => {
    const [foods , setFoods] = useState([])

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/EmtiazHossainE2/red-onion-roaster/main/public/items.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    
    return [foods,setFoods ]
}
export default useFoods;