// import React, { useState } from "react";
// import {
// 	Grid,
// 	Typography,
// 	FormControl,
// 	InputLabel,
// 	Select,
// 	MenuItem,
// 	TextField,
// 	Button,
// } from "@material-ui/core";
// import useStyles from "./styles";
// import formatDate from "../../../utils/formatDate";

// const initialState = {
//   amount : '',
//   category : '',
//   type : "Income",
//   date : new Date()
// }

// const Form = () => {
//   const [formData, setFormData] = useState(initialState)
// 	const classes = useStyles();

//   console.log("--formdata", formData)
// 	return (
// 		<Grid container spacing={2}>
// 			<Grid item xs={12}>
// 				<Typography align="center" variant="subtitle2" gutterBottom>
// 					{/* ... */}
// 				</Typography>
// 			</Grid>
// 			<Grid item xs={6}>
// 				<FormControl fullWidth>
// 					<InputLabel>Type</InputLabel>
// 					<Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
//             <MenuItem value="Income">Income</MenuItem>
//             <MenuItem value="Expense">Expense</MenuItem>
//           </Select>
// 				</FormControl>
// 			</Grid>
// 			<Grid item xs={6}>
//       <FormControl fullWidth>
//           <InputLabel>Category</InputLabel>
//           <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
//             {/* {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)} */}
//             <MenuItem value="business">Income</MenuItem>
//             <MenuItem value="no">Expense</MenuItem>
//           </Select>
//         </FormControl>
// 			</Grid>
//       <Grid item xs={6}>
//         <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
//       </Grid>
//       <Grid item xs={6}>
//         <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
//       </Grid>
// 			{/* <Button className={classes.button} variant='outlines' color="primary" fullWidth >Create</Button> */}
// 			<Button color="primary" fullWidth>
// 				Create
// 			</Button>
// 		</Grid>
// 	);
// };

// export default Form;
//  another tailwind using *********************************************

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import 'tailwindcss/tailwind.css';

// const initialState = {
//   amount: '',
//   category: '',
//   type: 'Income',
//   date: new Date().toISOString().substr(0, 10), // Format the date as "YYYY-MM-DD"
// };

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: initialState,
//   });

//   const onSubmit = (data) => {
//     console.log('Form submitted with data:', data);
//     // Handle form submission logic here
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full max-w-lg mx-auto p-4 space-y-4 bg-white rounded shadow"
//     >
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <select
//             {...register('type', { required: true })}
//             className={`block w-full mt-1 p-2 border rounded-md ${
//               errors.type ? 'border-red-500' : 'border-gray-300'
//             }`}
//           >
//             <option value="Income">Income</option>
//             <option value="Expense">Expense</option>
//           </select>
//           {errors.type && (
//             <p className="text-red-500 text-sm mt-1">Please select the type.</p>
//           )}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category</label>
//           <select
//             {...register('category', { required: true })}
//             className={`block w-full mt-1 p-2 border rounded-md ${
//               errors.category ? 'border-red-500' : 'border-gray-300'
//             }`}
//           >
//             <option value="business">Business</option>
//             <option value="no">No</option>
//           </select>
//           {errors.category && (
//             <p className="text-red-500 text-sm mt-1">Please select the category.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Amount</label>
//         <input
//           {...register('amount', { required: true })}
//           type="number"
//           className={`block w-full mt-1 p-2 border rounded-md ${
//             errors.amount ? 'border-red-500' : 'border-gray-300'
//           }`}
//         />
//         {errors.amount && (
//           <p className="text-red-500 text-sm mt-1">Please enter the amount.</p>
//         )}
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Date</label>
//         <input
//           {...register('date', { required: true })}
//           type="date"
//           className={`block w-full mt-1 p-2 border rounded-md ${
//             errors.date ? 'border-red-500' : 'border-gray-300'
//           }`}
//         />
//         {errors.date && (
//           <p className="text-red-500 text-sm mt-1">Please select the date.</p>
//         )}
//       </div>
//       <button
//         type="submit"
//         className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         Create
//       </button>
//     </form>
//   );
// };

// export default Form;


// jlakdjflkasdf*******************


// import React, { useContext, useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import Slide from '@material-ui/core/Slide';
// import { v4 as uuidv4 } from 'uuid';
// import { motion } from 'framer-motion';
// import { ExpenseTrackerContext } from '../../../context/context';
// import { incomeCategories, expenseCategories } from '../../../constants/categories';
// import { useSpeechContext } from '@speechly/react-client';

// const initialState = {
//   amount: '',
//   category: '',
//   type: 'Income',
//   date: new Date().toISOString().substr(0, 10), // Format the date as "YYYY-MM-DD"
// };
 
// const Form = () => {
//   const {segment} = useSpeechContext();
//   const [formdata, setformdata] = useState(initialState)
//   const [selectedType, setSelectedType] = useState(initialState.type);

//   useEffect(() => {
//   if(segment){
//  if(segment.intent.intent === 'add_expense'){ /* empty */
//  setSelectedType("Expense")
// } else if(segment.intent.intent === 'add_income') {
//   setSelectedType("Income")
// }
// console.log("--", segment.intent.intent);
//   }}, [segment])

// const {register,handleSubmit,formState: { errors },reset} = useForm({defaultValues: initialState,});
// const  {addTransaction} = useContext(ExpenseTrackerContext)
// const handleTypeChange = (e) => {
//     const newType = e.target.value;
//     setSelectedType(newType);
//   };
// const onSubmit = (data) => {
    
//     // Handle form submission logic here
//     const transaction = {...data, type : selectedType,  amount : Number(data.amount), id : uuidv4()}
//     console.log('Form submitted with data:', transaction);
//     addTransaction(transaction)
//    reset(initialState);
//     setSelectedType(initialState.type);
//   };
// // const selectedCategories = initialState.type === 'Income' ? incomeCategories : expenseCategories;
//   const selectedCategories = selectedType === 'Income' ? incomeCategories : expenseCategories;


//   return (
//     <motion.form
//     initial={{ opacity: 0, y: 50 }} // Initial animation values
//     animate={{ opacity: 1, y: 0 }} // Animation values when entering
//     exit={{ opacity: 0, y: -50 }} // Animation values when exiting
//     onSubmit={handleSubmit(onSubmit)}
//     className="w-full max-w-md mx-auto p-4 space-y-4 bg-white rounded shadow">
//     <div className="grid grid-cols-2 gap-4">
//       <div>
//         <TextField
//           {...register('type', { required: true })}
//           select
//           label="Type"
//           value={selectedType}
//           onChange={handleTypeChange}
//           fullWidth
//           error={!!errors.type}
//           helperText={errors.type && 'Please select the type'}
//         >
//           <MenuItem value="Income">Income</MenuItem>
//           <MenuItem value="Expense">Expense</MenuItem>
//         </TextField>
//       </div>
//       <div>
//         <TextField
//           {...register('category', { required: true })}
//           select
//           label="Category"
//           fullWidth
//           error={!!errors.category}
//           helperText={errors.category && 'Please select the category'}
//         >
//               {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
//         </TextField>
//       </div>
//     </div>
//     <TextField
//       {...register('amount', { required: true })}
//       label="Amount"
//       type="number"
//       fullWidth
//       error={!!errors.amount}
//       helperText={errors.amount && 'Please enter the amount'}
//     />
//     <TextField
//       {...register('date', { required: true })}
//       label="Date"
//       type="date"
//       fullWidth
//       error={!!errors.date}
//       helperText={errors.date && 'Please select the date'}
//     />
//     <Button type="submit" variant="contained" color="primary" fullWidth>
//       Create
//     </Button>
//   </motion.form>
//   );
// };

// export default Form;



// without react hook form

import React, { useContext, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import { useSpeechContext } from '@speechly/react-client';
import formatDate from '../../../utils/formatDate';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()), // Format the date as "YYYY-MM-DD"
};

const Form = () => {
  const { segment } = useSpeechContext();
  const [formData, setFormData] = useState(initialState);
  const [selectedType, setSelectedType] = useState(initialState.type);

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-') || formData.category=='' || formData.amount==='') 
                 return;

    if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: 'Income' });
    } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: 'Expense' });
    }

    addTransaction({ ...formData, amount: Number(formData.amount)});
    setFormData(initialState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'Expense' });
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'Income' });
      } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
        return createTransaction();
      } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
        return setFormData(initialState);
      }

      segment.entities.forEach((s) => {
        const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

        switch (s.type) {
          case 'amount':
            setFormData({ ...formData, amount: s.value });
            break;
          case 'category':
            if (incomeCategories.map((iC) => iC.type).includes(category)) {
              setFormData({ ...formData, type: 'Income', category });
            } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
              setFormData({ ...formData, type: 'Expense', category });
            }
            break;
          case 'date':
            setFormData({ ...formData, date: s.value });
            break;
          default:
            break;
        }
      });

      if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
        createTransaction();
      }
    }
  }, [segment]);


  const { addTransaction } = useContext(ExpenseTrackerContext);

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      // onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-4 space-y-4 bg-white rounded shadow">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <TextField
            name="type"
            select
            label="Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            fullWidth
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </TextField>
        </div>
        <div>
          <TextField
            name="category"
            select
            label="Category"
            value={formData.category}
            // onChange={handleInputChange}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            fullWidth
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <TextField
        name="amount"
        label="Amount"
        type="number"
        fullWidth
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        // onChange={handleInputChange}
      />
      <TextField
        name="date"
        label="Date"
        type="date"
        fullWidth
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
        // onChange={handleInputChange}
      />
      <Button onClick={createTransaction}  variant="contained" color="primary" fullWidth>
        Create
      </Button>
    </motion.form>
  );
};

export default Form;

