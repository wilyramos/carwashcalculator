import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}


export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
        className=" border-2 border-orange-500 hover:bg-orange-200 p-4 w-full my-2 flex justify-between items-center rounded-md"
        onClick={() => addItem(item)}
    >
    
        <p>{item.name}</p>
        <p className=" font-bold text-black-600">${item.price}</p>
    </button>
  )
}
