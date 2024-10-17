const Contact = () => {
    return (
        <div>
            <h1 className="text-center font-bold">ContactUs Page</h1>
            <form>
            <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Name"
            />
            <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Message"
            />
            <button className="border border-black p-2 m-2 rounded-md">Submit</button>
            </form>
        </div>
    );
};

export default Contact;