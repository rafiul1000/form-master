import './App.css'
import ReusableForm from './ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './RefForm/RefForm'
// import StatefulForm from './StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data =>{
    console.log('sign up data', data);
}


const handleUpdateProfile = data =>{
  console.log('update profile', data);
}

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'}
       handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
       </ReusableForm>
      <ReusableForm formTitle={'Profile Update'}
       handleSubmit={handleUpdateProfile} 
       submitBtnText='Update'>
        <div>
          <h2>Update profile</h2>
          <p>always keep your profile updated</p>
        </div>
       </ReusableForm>
    </>
  )
}

export default App
