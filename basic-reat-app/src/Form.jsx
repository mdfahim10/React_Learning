function handleFormSubmit(){
    event.preventDefault();
    console.log("Form was submitted!");
}

 function Form(){
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something" />
            <button>Submit</button>
        </form>
    );
}
export default Form
