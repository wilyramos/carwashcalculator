import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    
    const addItem = (item: MenuItem) => {

        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if(itemExists){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)

            setOrder(updatedOrder)       
            
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        
        }
    }

    const removeItem = (id: MenuItem['id']) => {

        const updatedOrder = order.reduce<OrderItem[]>((acc, item) => {
            if(item.id === id){
                if(item.quantity > 1){
                    acc.push({...item, quantity: item.quantity - 1})
                }
            }else{
                acc.push(item)
            }
            return acc
        }, [])
        setOrder(updatedOrder)
    }
    
    const placeOrder = () => {
        
    }

    console.log(order)
    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder

    }
}