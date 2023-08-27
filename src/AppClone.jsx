// import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";
// import Detail from "./components/Detail/Detail";
// import ExpenseTracker from "./components/Main/Main";



// export default function AppClone() {
   
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
//     {/* Desktop View */}
//     <div className="w-full md:w-1/3 p-4">
//       <Detail title="Expense" />
//     </div>
  
//     {/* Main Content */}
//     <div className="w-full md:w-1/3 p-4">
//       <ExpenseTracker />
//     </div>
  
//     {/* Mobile View */}
//     <div className="w-full md:w-1/3 p-4">
//       <Detail title="Income" />
//     </div>

// <div className="mt-5">
// <PushToTalkButtonContainer>
//     <PushToTalkButton/>
//    </PushToTalkButtonContainer>
// </div>
   
//   </div>

//   );
// }


import { PushToTalkButton, PushToTalkButtonContainer} from "@speechly/react-ui";
import Detail from "./components/Detail/Detail";
import ExpenseTracker from "./components/Main/Main";

export default function AppClone() {
 
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* Desktop View */}
      <div className="w-full md:w-1/3 p-4 mb-5">
        <Detail title="Expense" />
      </div>
  
      {/* Main Content */}
      <div className="w-full md:w-1/3 p-4 mb-5">
        <ExpenseTracker />
      </div>
  
      {/* Mobile View */}
      <div className="w-full md:w-1/3 p-4 mb-5">
        <Detail title="Income" />
      </div>

      {/* PushToTalkButton */}
      <div >
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          {/* <ErrorPanel/> */}
        </PushToTalkButtonContainer>
      </div>
    </div>
  );
}

