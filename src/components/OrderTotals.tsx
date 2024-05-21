import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity*item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])
    
    
    return (
    <>
        <div>
            <h2 className='font-black text-2xl'>Totales y propina</h2>
            <p>Subtotal a pagar: {''}</p>
                <span className=" font-bold">{ formatCurrency(subtotalAmount)}</span>
            <p>Propina: </p>
                <span className=" font-bold">{ formatCurrency(tipAmount)}</span>
            <p>Total a pagar: </p>
                <span className=" font-bold">{ formatCurrency(totalAmount)}</span>
        </div>

        <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10
            disabled:opacity-20"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
            
    </>

    )

}