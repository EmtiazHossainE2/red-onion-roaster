import { useEffect, useState } from "react"

const useGetCategory = category => {
    const [categoryItem, setCategoryItem] = useState([])

    useEffect(() => {
        const url = `https://em-red-onion-roaster.herokuapp.com/service/`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const foodItem = data.filter(food => food.nameId?.includes(category));
                setCategoryItem(foodItem)
            })

    }, [category, categoryItem])
    return categoryItem;
}

export default useGetCategory; 