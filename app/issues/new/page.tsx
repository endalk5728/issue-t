'use client'
import { useForm, SubmitHandler } from "react-hook-form"

import { Controller } from "react-hook-form"

import { Button,Callout,Text } from "@radix-ui/themes";
import {Input} from "@nextui-org/react";
//import { Button } from '@nextui-org/react';
 import SimpleMDE from "react-simplemde-editor";
 import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/createIssueSchema";
import {z  }from 'zod'
import { ErrorMessage } from "@/app/component/ErrorMessage";
import Spinner from "@/app/component/Spinner";



type IssueForm =z.infer<typeof createIssueSchema>;


export default function App() {
 const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState:{errors}
  
  } = useForm <IssueForm>({resolver:zodResolver(createIssueSchema)});

const  [error,setError]=useState('');

const [isSubmitting,setSubmitting]=useState(false);
const onSubmit=handleSubmit( async (data)=>{

  try {
    setSubmitting(true);
    
    await axios.post('/api/issues',data);
    router.push('/issues');
  } catch (error) {
    setSubmitting(false);
   setError('An unexpected error occourred')
  }});

  return (
    <div className="max-w-xl">
     { error &&<Callout.Root color="red" className="mb-5">
  <Callout.Icon>
  </Callout.Icon>
  <Callout.Text>
  {error}
  </Callout.Text>
</Callout.Root>
}
    <form className=" space-y-3" onSubmit={onSubmit}
     
    >
   
      <Input  type="text" placeholder="Enter your title" {...register('title')}/>

      
      <ErrorMessage>
        {errors.title?.message}
        </ErrorMessage>
      <Controller
    name="description"
    control={control}
    render={({field})=><SimpleMDE placeholder="description"{...field}/>}
/>
<ErrorMessage>
        {errors.description?.message}
        </ErrorMessage>

      <Button disabled={isSubmitting}> submit new issue{isSubmitting&&<Spinner/>}</Button>  
    </form>
    </div>
  )
}