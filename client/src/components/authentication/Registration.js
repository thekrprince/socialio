I
const Registration = () => {
    const [named, Setname] = useState('')
    const submit = () =>{
        
    };
    return (
        <form onclick={submit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
            <label htmlFor="email">Email Id</label>
            <input type="text" name="email" id="" />
            <label>Password</label>
            <input type="text" />
            <button>Submit</button>
        </form>
        
    );
};

export default Registration;