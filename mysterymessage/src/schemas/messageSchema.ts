import {z} from 'zod'

export const messageSchema=z.object({
    content:z.string().min(2,{message:"content must be more than 2 characters"}).max(300,{message:"content should be less than 300 characters"})
 
})