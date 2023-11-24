import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/shared/Button'
import { signin } from '../api'

const schema = yup
    .object({
        email: yup.string().required().trim(),
        password: yup.string().required(),
    })
    .required()
export default function Login() {
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data:yup.InferType<typeof schema>) => {
       try{
         console.log(data)
         const {email, password }= data 
        await signin.signIn(email, password)
        navigate("/stories",{replace:true})
       } catch(error){
            if (error instanceof Error){
                throw new Error(`${error.message}`)
            }
       }
    }

    return (
        <>
            <div className="flex items-center justify-center px-4 sm:px-10 2xl:mt-16 2xl:items-start">
                <div className="w-full space-y-20 sm:w-auto">
                    <p className="flex flex-col text-center  text-xl text-gray-300 ">
                        <span>Log in</span>
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 text-black sm:text-sm"
                    >
                        <input
                            placeholder="e-mail "
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.email && 'border-2 border-red-400'])}
                            type="text"
                            {...register('email')}
                        />

                        {errors.email && <p className=" pl-3 text-red-400">The email you entered is not recognized!</p>}
                        <input
                            placeholder="password"
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.password && 'border-2 border-red-400'])}
                            type="text"
                            {...register('password')}
                        />
                        {errors.password && <p className=" pl-3 text-red-400"> The password is invalid</p>}

                        <Button
                        type="submit"
                        > Log in</Button>
                        <p className="text-base text-gray-300">Don&apos;t have an account yet? <Link to="/signup" className="underline text-primary-100">Sign-up</Link></p>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
