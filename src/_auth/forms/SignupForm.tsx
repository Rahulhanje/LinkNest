
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
import { SignupValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link ,useNavigate } from "react-router-dom"
// import SigninForm from "./SigninForm"
// import { createUserAccount } from "@/lib/appwrite/api"
import { useToast } from "@/components/ui/use-toast"
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"


function SignupForm() {
  
   const navigate=useNavigate();
  const { toast } = useToast();
  //@ts-ignore
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
//@ts-ignore
  const { mutateAsync: sigInAccount, isPending: isSigningIn } = useSignInAccount();
  //@ts-ignore
  const {checkAuthUser,isLoading:isUserLoading}=useUserContext();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: ""

    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newuser = await createUserAccount(values);

    console.log(newuser)
    if (!newuser) {
      return toast({
        title: "Sign up failed.Please try again."
      });
    }
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
        <img src="\assets\images\logo.svg" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular">To use Snapgram please enter your details</p>


        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="Enter your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="Enter unique username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="example123@gmail.com" {...field} />
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
                  <Input type="text" className="shad-input" placeholder="Enter a strong password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isSigningIn? (
              <div className="flex-center gap-2">
                <Loader></Loader>
              </div>
            ) : (
              "Sign-up"
            )
            }
          </Button>
          <p className="text-small-regular text-light-2  text-center mt-2">
            Already Have an account
            <Link to='/sign-in' className="text-primary-500 text-small-semibold ml-1">  Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm
