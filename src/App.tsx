import { menuItems } from './data/db'
import MenuItem from './components/MenuItem'
import useOrder from './hooks/useOrder'
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder} = useOrder()

  return (
    <>
      <header className="uppercase bg-gradient-to-r from-yellow-800 to-orange-600 py-8 text-center">
        <h1 className="text-4xl font-bold text-white">Calculadora de CarWash</h1>        
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8">
        <div className='p-5 bg-gray-100 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Lista de Servicios</h2>

          <div className='space-y-4'>
            {menuItems.map(item => (
              <MenuItem 
                key={item.id} 
                item={item} 
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-6 shadow-md">
          {order.length > 0 ?(
            <>
              <OrderContents 
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm 
                tip={tip}
                setTip={setTip}
              />
              <OrderTotals 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />            
            </>
          ) : (
            <p className="text-center">No hay elementos</p>          
          )}
        </div>
      </main>
    </>
  )
}

export default App
