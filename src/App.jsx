import { useCallback, useEffect, useRef, useState } from 'react'

function App() {


  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const pwRef=useRef(null);

  const generatePassword = useCallback(() => {
    let pw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "1234567890";
    let sym = "@#$%&*!_-+|";

    if (number) {
      str += num;
    }
    if (symbols) {
      str += sym;
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pw += str.charAt(char);
    }

    setPassword(pw);

  }, [length, number, symbols, setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,number,symbols,generatePassword])

  const CopytoClipboard=useCallback(() => {
    pwRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])




  return (
    <>

      <div className='bg-[#ee9d3a] flex flex-col justify-center justify-items-center items-center rounded-xl shadow-md shadow-pink-300 sm:flex-row sm:items-start lg:m-11'>

        <img src="secure.svg" alt="" className='w-7/12 mx-auto py-4 drop-shadow-lg sm:w-2/6 sm:ml-8' />

        <div className='sm:mr-32 sm:pt-4 mx-6 my-4'>

          <h1 className='text-lg  font-Anton  text-pink-900 tracking-wider sm:text-left md:text-xl lg:text-2xl xl:text-4xl'>Random Password Generator</h1>

          <input
            type="text"
            value={password}
            placeholder='Password'
            className='p-2 my-3 rounded-s-lg bg-[#f7ddc3] sm:w-10/12  xl:w-10/12 text-pink-900 outline-none transition-all'
            ref={pwRef}
            readOnly
          />

          <button 
          onClick={CopytoClipboard}
          className='bg-blue-600 p-2 -ml-3 rounded-e-lg font-semibold  text-blue-50 hover:bg-blue-900 active:bg-blue-300 active:text-blue-800 transition duration-2000'>
            Copy
          </button>

          <div>

            <input type="range"
              min={8}
              max={50}
              onChange={(e) => { setLength(e.target.value) }}
              className='"w-full h-2 bg-gray-200 rounded-lg cursor-pointer"'
            />

            <label className='text-pink-900 font-semibold font-serif pl-1'>Length : {length} </label>

          </div>

          <div className='m-2'>

            <input
              type="checkbox"
              defaultChecked={number}
              className=" h-3 w-4  border  rounded-md transition duration-200"
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />

            <label htmlFor="NumberInput"
              className='text-pink-900 font-semibold font-serif p-2'>
              Include Numbers
            </label>

          </div>

          <div className='m-2'>

            <input
              type="checkbox"
              defaultChecked={symbols}
              className=" h-3 w-4 border rounded-md transition duration-200"
              onChange={() => {
                setSymbols((prev) => !prev)
              }}
            />

            <label htmlFor="symbolsInput"
              className='text-pink-900 font-semibold font-serif p-2'>
              Include symbols
            </label>

          </div>



        </div>

      </div>
    </>
  )
}

export default App
