const ContactForm = () => {
  const labelClass = 'text-white text-2xl font-semibold text-center mb-2';
  const inputClass = 'w-[300px] md:w-[700px] outline outline-2 focus:outline-[#bc6d38] hover:outline-[#bc6d38] rounded-[20px] p-2 mb-4 mx-auto px-5 text-white bg-[#0D2644]';
  return (
    <section className="py-[100px]" id="Contact">
      <h1 className="text-center text-7xl font-semibold text-white font-playfair mb-5">Contact Me</h1>
      <form className="flex flex-col">
        <label className={labelClass}>Name</label>
        <input type="text" className={inputClass} />
        <label className={labelClass}>Email</label>
        <input type="text" className={inputClass} />
        <label className={labelClass}>Message</label>
        <textarea className="w-[300px] mx-auto h-[300px] rounded-[20px] px-5 py-5 text-white bg-[#0D2644] md:w-[700px] border border-white hover:border-[#bc6d38]"></textarea>
      </form>
    </section>
  );
};

export default ContactForm;
