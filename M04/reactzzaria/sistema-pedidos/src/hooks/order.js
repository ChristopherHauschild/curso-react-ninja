import { OrderContext } from 'contexts'
import { useContext } from 'react'

function useOrder () {
  return useContext(OrderContext)
}

export default useOrder
