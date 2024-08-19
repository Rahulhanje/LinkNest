import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import { Input } from "@/components/ui/input"
import { SigninValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link ,useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import {  useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"


function SigninForm() {
  
   const navigate=useNavigate();
  const { toast } = useToast();
 

  const { mutateAsync: sigInAccount, } = useSignInAccount();
  const {checkAuthUser,isLoading:isUserLoading}=useUserContext();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {

      email: "",
      password: ""

    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {

    const session = await sigInAccount({
      email: values.email,
      password: values.password,
    })
    if (!session) {
      return toast({ title: "Sign in Failed Please try again" });
    }
    const isLoaggedIn=await checkAuthUser();
    if(isLoaggedIn){
      form.reset();
      navigate('/');
    }
    else{
     return toast({title: "Sign up failed.Please try again."});
    }


  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="\assets\images\logo.svg" width="250" height="100" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Login to Your account</h2>
        <p className="text-light-3 small-medium md:base-regular">Welcome back please enter your details</p>


        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="testing123@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="Testing123@" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isUserLoading? (
              <div className="flex-center gap-2">
                <Loader></Loader>
              </div>
            ) : (
              "Sign-in"
            )
            }
          </Button>
          <p className="text-small-regular text-light-2  text-center mt-2">
            Don't Have an account
            <Link to='/sign-up' className="text-primary-500 text-small-semibold ml-1 ">Create account</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SigninForm;
