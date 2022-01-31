import React from 'react';
import { useForm } from 'react-hook-form';
import './App.scss';

export default function App() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid } ,
    reset,
  } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data));
    reset();
  };
  console.log(errors);
  
  return (
    
    <div className='forma'>
        <div className='txtField'>
        <h1 className='h1'>
          Learn to code by watching others
          </h1>
          <p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto quam quaerat doloribus animi cumque atque, laudantium delectus amet commodi explicabo pariatur. Quam saepe libero, blanditiis maxime at voluptatum vitae.</p>

        </div>

        <div className='formField'>
              <a href='https://www.google.ru/' target={"_blank"}><b>Try it free 30 days</b> then $20/mo. thereafter</a>
              <div className='frm'>              
                <form onSubmit={handleSubmit(onSubmit)}>              
                
                  <input type="text" placeholder="First name" 
                    {...register("firstName", {
                      required: "Поле обязательно к заполнению",
                      minLength: {
                        value: 4,
                        message: "Минимум 4 символа"
                      },
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    }
                    )} 
                  />
                
                <div className='error' style={{height: 30}}>{errors?.firstName && <p className='p'>{errors?.firstName?.message || "Error!"}</p>}</div>


                  <input type="text" placeholder="Last name" 
                    {...register("lastName", {
                      required: "Поле обязательно к заполнению",
                      minLength: {
                        value: 1,
                        message: "Минимум 1 символ",
                      },
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })} 
                  />
                <div className='error' style={{height: 30}}>{errors?.lastName && <p className='p'>{errors?.lastName?.message || "Error!"}</p>}</div>
              

                    <input type="text" placeholder="Email" 
                      {...register("email", {
                      required: "Поле обязательно к заполнению", 
                      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    })} 
                    />
                <div className='error'style={{height: 30}}>{errors?.email && <p className='p'>{errors?.email?.message || "Введите свой e-mail"}</p>}</div>


                    <input type="password" placeholder="Password" 
                      {...register("password", {

                      required: "Поле обязательно к заполнению", 
                      minLength: {
                        value: 7,
                        message: "Пароль должен содержать заглавные и строчные буквы, цифры,специальные символы (не менее 7)",
                      },
                      
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/,
                    })} 
                    />

                <div className='error' style={{height: 30}}>{errors?.password && <p className='p'>{errors?.password?.message || "Error!"}</p>}</div>


              <input type="submit" disabled={!isValid}/>

              <p className='terms'>By clicking the button you are agreeing to our <b>Terms and Services</b></p>
            </form>
            </div>

        </div>

    </div>
    
  );
}


