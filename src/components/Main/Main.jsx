// import React from 'react';
// import List from './List/List';
// import Form from './Form/Form';

// const ExpenseTracker = () => {
//   return (
//     <div className="bg-white p-4 rounded-md shadow-md ">
//       <h2 className="text-lg font-semibold text-center mb-2">Track Your Expenses</h2>
//       <p className="text-center mb-4">Let us take care of it</p>
//       <p className="text-center text-xl font-semibold mb-4">Total Balance $500</p>
//       <span className='py-2 mt-5 line-clamp-2 text-center'>Try Sying : Add income for $100 in category salary for monday</span>
//       <Form/>
//       <hr className="my-5 border-t-2 border-gray-300" />
//       {/* <Divider className="my-5" /> */}
//       {/* Replace with your InfoCard or Form components */}
//       <List/>
//     </div>
//   );
// };

// export default ExpenseTracker;

import React, { useContext, useEffect, useState } from 'react';
import List from './List/List';
import Form from './Form/Form';
import { ExpenseTrackerContext } from '../../context/context';
import { useSpeechContext } from '@speechly/react-client';


const ExpenseTracker = () => {
  const [isMounted, setIsMounted] = useState(false);
  // trnscript
  const {segment} = useSpeechContext();

  useEffect(() => {
  
    // Delay setting isMounted to true to trigger the fade-in animation
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
  console.log("trnscript", segment);
  }, [segment])
  

  const { balance, loading } = useContext(ExpenseTrackerContext);

//   if(loading){
// return <p className='text-4xl text-white'>Loading....</p>
//   }

  return (
    <div
      className={`bg-white p-6 rounded-md shadow-lg mx-auto max-w-md ${
        isMounted ? 'animate-fade-in' : ''}`
      }
    >
      <p className="text-center text-2xl font-semibold mb-4">Total Balance ${balance}</p>
      <span className="block text-sm text-center text-gray-500">
        Try saying: Add income of $100 in the category Salary for Monday
      </span>

      <span className="block text-sm text-center text-gray-500">
      {segment ? (<>
      {segment.words.map((w)=>w.value).join(" ")}
      </>): null}
      </span>
      <Form />
      <hr className=" border-t border-gray-300" />
      {/* Replace with your InfoCard or Form components */}
      <List />
    </div>
  );
};

export default ExpenseTracker;
