import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import classNames from 'classnames'
import { Link, redirect } from 'react-router-dom'
import Button from '../components/shared/Button'


const schema = yup
    .object({
        username: yup.string().required().trim(),
        password: yup.string().required(),
    })
    .required()
export default function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = data => {
        console.log(data)
        redirect("stories")
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
                            placeholder="Username / e-mail "
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.username && 'border-2 border-red-400'])}
                            type="text"
                            {...register('username')}
                        />

                        {errors.username && <p className=" pl-3 text-red-400">The email/ username is invalid</p>}
                        <input
                            placeholder="password"
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.password && 'border-2 border-red-400'])}
                            type="text"
                            {...register('password')}
                        />
                        {errors.password && <p className=" pl-3 text-red-400"> The password is invalid</p>}

                        <Button
                        type="Submit"
                            className="mt-9 w-full rounded-full py-3 text-center font-bold bg-primary-800 text-w transition hover:bg-gray-300 hover:text-violet-950 sm:w-80"
                        > Log in</Button>
                        <p className="text-base text-gray-300">Don&apos;t have an account yet? <Link to="/signup" className="underline text-violet-950">Sing-up</Link></p>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
