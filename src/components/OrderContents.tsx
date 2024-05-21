import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
    order:OrderItem[],
    removeItem: (item: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>

        <div className='space-y-3 mt-5'>
            {order.map(item => (
                    <div 
                        key={item.id}
                        className=" border border-slate-300 p-2 rounded-md flex justify-between items-center"
                    >
                        <p>{item.name}</p>

                        <p className=" font-light">
                            Cantidad: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}
                        </p>

                        <button
                            className=" bg-red-500 text-white px-2 py-1 rounded-md"
                            onClick={() => removeItem(item.id)}
                        >
                            Eliminar
                        </button>   
                    </div>
                ))
            }    
        </div>
    </div>
  )
}
