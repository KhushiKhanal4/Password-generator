import { useCallback, useState } from 'react'

function App() {

  
  const [length,setLength]=useState(8);
  const [number,setNumber]=useState(false);
  const [symbols,setSymbols]=useState(false);
  const [password,setPassword]=useState("");

const gneratePassword = useCallback( () => {
  let pw="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num="1234567890";
  let sym="@#$%&*!_-+|";

  if(setNumber){
    str+=num;
  }
  if(setSymbols){
    str+=symbols;
  }

  for (let i = 1; i <=length; i++) {
    let char=Math.floor(Math.random * str.length + 1);
    pass+=str.charAt(char);
  }
  setPassword(pass);


},[length,number,symbols,setPassword])
   

  return (
    <>

      <div className='bg-[#ee9d3a] flex flex-col justify-center justify-items-center items-center rounded-xl shadow-md shadow-pink-300 sm:flex-row-reverse sm:items-start lg:m-11'>
        <h1 className='text-lg text-center font-Anton pt-6 text-pink-900 tracking-wider sm:mr-20 sm:text-left md:text-xl md:mr-28 lg:text-2xl lg:mr-32 xl:text-4xl xl:mr-44'>Random Password Generator</h1>
        <img src="secure.svg" alt="" className='w-7/12 mx-auto py-4 drop-shadow-lg sm:w-2/6 sm:ml-8' />

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur id obcaecati quibusdam laudantium voluptas harum esse temporibus repellendus labore qui distinctio possimus, voluptatum optio in voluptates vitae nemo similique.</p>
        </div>

      </div>
    </>
  )
}

export default App
