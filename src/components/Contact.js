
const Contact = () => {
  return (
    <div className="m-4 p-2">
        <h1 className="m-1 font-bold text-2xl">Contact Us</h1>
        <form>
          <input type="text" placeholder="Name" className="m-2 p-2 border border-black rounded-2xl" />
          <input type="text" placeholder="Email" className="m-2 p-2 border border-black rounded-2xl" />
          <input type="text" placeholder="Message" className="m-2 p-2 border border-black rounded-2xl" />
          <button className="m-2 p-2 bg-slate-100 border border-black rounded-2xl">Submit</button>
        </form>
    </div>
  )
}

export default Contact;