import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import classNames from 'classnames'
import { Link } from 'react-router-dom'


const schema = yup
    .object({
        username: yup.string().required().trim(),
        email:yup.string().trim(),
        password: yup.string().required().trim(),
        confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match"),
    })
    .required()
export default function Signup() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = data => console.log(data)

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
                            placeholder="Your email"
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.username && 'border-2 border-red-400'])}
                            type="text"
                            {...register('email')}
                        />

                        {errors.email && <p className=" pl-3 text-red-400">The email invalid</p>}
                        <input
                            placeholder="Your username "
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.username && 'border-2 border-red-400'])}
                            type="text"
                            {...register('username')}
                        />

                        {errors.username && <p className=" pl-3 text-red-400">The username is invalid</p>}
                        <input
                            placeholder="password"
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.password && 'border-2 border-red-400'])}
                            type="text"
                            {...register('password')}
                        />
                        {errors.password && <p className=" pl-3 text-red-400"> The password is invalid</p>}
                        <input
                            placeholder="confirm your password"
                            className={classNames(['w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500', errors.password && 'border-2 border-red-400'])}
                            type="text"
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && <p className=" pl-3 text-red-400"> Your passwords are incompatible</p>}
                        <button
                            className="mt-9 w-full rounded-full py-3 text-center font-bold bg-violet-950 text-gray-300 transition hover:bg-gray-300 hover:text-violet-950 sm:w-80"
                        > Log in</button>
                        <p className="text-base text-gray-300">Already have an account ? <Link to="/login" className="underline text-red-300">Login</Link></p>

                    </form>
                </div>
            </div>
        </>
    )
}