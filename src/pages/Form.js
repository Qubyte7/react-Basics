import styles from '../App.module.css'
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup' 


export const Form = ()=>{
const schema = yup.object().shape({
    fullName:yup.string().required("Your Full Name Required"),
    age:yup.number().required("Your age is Required").min(12).max(90),
    email:yup.string().email().required("Please Enter Your Email"),
    password:yup.string().required('Please Password Required').min(4).max(10),
    confirmPassword : yup.string().oneOf([yup.ref("password")], null, "Password don't match ").required()

})

const {register,handleSubmit , formState : {errors}} = useForm({
    resolver: yupResolver(schema)
});

const onsubmit = (data) =>{
    console.log(data)
}


    return( 
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onsubmit)}>
            <input type="text" placeholder="full Name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age.." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="text" placeholder="Password" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="text" placeholder="Confirm Password" {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
            </form>
        </div>
    )
}