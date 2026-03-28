function Careers() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl mb-4">Join as Civil Engineer</h2>

      <form className="space-y-4">
        <input className="border p-2 w-full" placeholder="Name" />
        <input className="border p-2 w-full" placeholder="City" />
        <input className="border p-2 w-full" placeholder="Experience" />

        <button className="bg-black text-white px-6 py-2">
          Apply
        </button>
      </form>
    </div>
  );
}

export default Careers;