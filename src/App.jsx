import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StateFulForm from "./components/StateFulForm/StateFulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("update profile", data);
  };

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm /> */}
      {/* <StateFulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText={"Update"}
      >
        <div>Update profile</div>
        <p>Always keep your profile update</p>
      </ReusableForm> */}
    </>
  );
}

export default App;
