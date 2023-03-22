
import './SignUp.css'


export default function Signup() {
  const values = {};
  function handleInput(type, e) {
    values[type] = e.target.value;
    console.log(values);
  }

  function handleSubmit(e, type) {
    e.preventDefault();
    if (values.userName && values.password) {
      const headers = new Headers();
      headers.append("content-type", "application/json");
      fetch(`http://localhost:4005`, {
        headers,
        method: "POST",
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("res", res);
        });
    }
  }

  return (
    <div id='signup-container'>
      <h1>sign up</h1>
      <form
        onSubmit={() => {
          handleSubmit(event, "signup");
        }}
      >
        <div className='inputs'>

        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          name="userName"
          onInput={(event) => {
              handleInput("userName", event);
            }}
            />
            </div>
        <div className='inputs'>

        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="pass"
          onInput={(event) => {
              handleInput("password", event);
            }}
            />
            </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
