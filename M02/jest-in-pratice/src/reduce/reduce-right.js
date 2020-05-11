import mainReduce from './main-reduce'
import reverse from '../reverse/reverse'

// ...params -> func, initialValue
const reduceRight = (arr, ...params) => 
    mainReduce(reverse(arr), ...params)  

export default reduceRight