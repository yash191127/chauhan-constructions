function Contact() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl mb-4">Contact Us</h2>

      <form className="space-y-4">
        <input className="border p-2 w-full" placeholder="Name" />
        <input className="border p-2 w-full" placeholder="Phone" />
        <textarea className="border p-2 w-full" placeholder="Message" />

        <button className="bg-black text-white px-6 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;