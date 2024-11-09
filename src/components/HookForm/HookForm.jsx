import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Rojoni hooked");

  const nameState = useInputState("Rojoni hooked");
  const emailState = useInputState("rojoni@klanto.com");
  const passwordState = useInputState("Rojoni hooked");

  const handleSubmit = (e) => {
    console.log("form data", name);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <input
          {...nameState}
          value={name}
          //   onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        {/* <input type="email" name="email" /> */}
        <input {...emailState} type="email" name="email" />
        <br />
        {/* <input type="password" name="password" /> */}
        <input {...passwordState} type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
