import React from 'react';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema } from '../../helpers/zodValidator';

const Form = () => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm({resolver: zodResolver(signUpFormSchema)})
  const submittedData = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(submittedData)}
      >
        <input
          className={styles.formInput}
          type="text"
          placeholder="Name"
          {...register('name')}
        />
        <input
          className={styles.formInput}
          type="text"
          placeholder="Email"
          {...register('email')}
        />
        <input
          className={styles.formInput}
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <input
          className={styles.formInput}
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword')}
        />
        <button className={styles.formButton}>Submit</button>
      </form>
      <ul className={styles.errorList}>
        {errors.name && <li className='text-white opacity-80'><small>{errors.name.message}</small></li>}
        {errors.email && <li className='text-white opacity-80'><small>{errors.email.message}</small></li>}
        {errors.password && <li className='text-white opacity-80'><small>{errors.password.message}</small></li>}
        {errors.confirmPassword && <li className='text-white opacity-80'><small>{errors.confirmPassword.message}</small></li>}
      </ul>
    </>
  )
};

export default Form;