import {z} from 'zod'


export const SignupValidation = z.object({
    name:z.string().min(2,{message:'Too Short name'}),
  username: z.string().min(2,{message:'Too Short username'}),
  email:z.string().email(),
  password:z.string().min(6,{message:'Too Short Password must contain 6 letters'})
}) 


export const SigninValidation = z.object({
email:z.string().email(),
password:z.string().min(6,{message:'Too Short Password must contain 6 letters'})
}) 
