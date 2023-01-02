import React from "react";
import {Link} from "react-router-dom";

export const Login: React.FC = () => {

  return <div>
    <Link to="/singUp">Create new account</Link>
  </div>;
};

// import * as React from "react";
// import { useForm } from "react-hook-form";
//
// interface IFormInput {
//     name: string;
//     surname: string;
//     age: number;
//     example: string;
// }
//
// export const Login: React.FC = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors }
//     } = useForm<IFormInput>();
//
//     console.log(register, "register")
//
//     const onSubmit = (data: IFormInput) => {
//         alert(JSON.stringify(data));
//     }; // your form submit function which will invoke after successful validation
//
//     console.log(watch("example")); // you can watch individual input by pass the name of the input
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label>First Name</label>
//             <input
//                 {...register("name", {
//                     required: true,
//                     maxLength: 20,
//                     pattern: /^[A-Za-z]+$/i
//                 })}
//             />
//             {errors?.name?.type === "required" && <p>This field is required</p>}
//             {errors?.name?.type === "maxLength" && (
//                 <p>First name cannot exceed 20 characters</p>
//             )}
//             {errors?.name?.type === "pattern" && (
//                 <p>Alphabetical characters only</p>
//             )}
//             <label>Laste Name</label>
//             <input {...register("surname", { pattern: /^[A-Za-z]+$/i })} />
//             {errors?.surname?.type === "pattern" && (
//                 <p>Alphabetical characters only</p>
//             )}
//             <label>Age</label>a
//             <input {...register("age", { min: 18, max: 99 })} />
//             {errors.age && (
//                 <p>You Must be older then 18 and younger then 99 years old</p>
//             )}
//             <input type="submit" />
//         </form>
//     );
// }

// import React from 'react';
// import uniqlo from '../../assets/images/uniqlo.png'
// import styles from './Login.module.scss'
// import {Link} from "react-router-dom";
//
// import {RiErrorWarningLine} from 'react-icons/ri'
// import {IoWarningOutline} from "react-icons/io5";
//
// export const Login: React.FC = () => {
//     return (
//         <div className={styles.login}>
//             <div className={styles.loginHeader}>
//                 <div className={styles.wrapper}>
//                     <Link to="/">
//                         <img src={uniqlo} alt="logo"/>
//                     </Link>
//                 </div>
//             </div>
//
//             <div className={styles.loginContent}>
//                 <div className={styles.text}>
//                     <div>
//                         <h1>LOGIN</h1>
//                         <p>Log in with your email address and password.
//                         </p>
//                     </div>
//                     <div className={styles.required}>
//                         <p>Required <span>*</span></p>
//                         <span><RiErrorWarningLine/></span>
//                     </div>
//                 </div>
//
//                 <div className={styles.warning}>
//                     <span>
//                         <IoWarningOutline/>
//                     </span>
//                     <div>
//                         <p>
//                             Can't login? We’ve updated our system! If you have not logged in since March 23, 2022,
//                             please use the <span>" Forgot your password? "</span> link to reset your password now.
//                             Please do not reuse a password you have used on another service or a password that is easily
//                             guessed.
//                         </p>
//                     </div>
//                 </div>
//
//                 <div className={styles.form}>
//                     <form>
//                         <label>
//                             EMAIL ADDRESS
//                             <input type="email"/>
//                         </label>
//                         <label>
//                             PASSWORD
//                             <input type="password"/>
//                         </label>
//
//                         <label>
//                             <input type="checkbox"/>
//                             Show my password
//                         </label>
//                         <button>LOG IN</button>
//                     </form>
//
//                     <p>FORGOT YOUR PASSWORD?</p>
//                 </div>
//
//             </div>
//         </div>
//     );
// };
