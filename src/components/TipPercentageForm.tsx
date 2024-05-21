import React from "react"

const tipOptions = [
    {
      id: 'tip-5',
      value: .5,
      label: '5%'
    },
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
]

type TipPercentageFormProps = {
    tip: number,
    setTip: React.Dispatch<React.SetStateAction<number>>
}


export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
  return (
    <div>
        <h3 className='font-black text-2xl'>Propina</h3>

        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <input 
                        id={tipOption.id} 
                        type="radio" 
                        name="tip" 
                        value={tipOption.value} 
                        onChange={ e => setTip(+e.target.value)}
                        checked={tip === tipOption.value}
                    />
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                </div>
            ))}

        </form>
    </div>
  )
}
