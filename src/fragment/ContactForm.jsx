import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const labelClass = 'text-white text-2xl font-semibold text-center mb-2';
  const inputClass = 'w-[300px] md:w-[700px] outline outline-2 focus:outline-[#bc6d38] hover:outline-[#bc6d38] rounded-[20px] p-2 mb-4 mx-auto px-5 text-white bg-[#0D2644]';
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
      toast.error('Silakan lengkapi semua kolom.', { position: 'top-center' });
      return;
    }

    if (!isValidEmail(userEmail)) {
      toast.error('Alamat email tidak valid.', { position: 'top-center' });
      return;
    }

    try {
      const isEmailValid = await verifyEmailOnServer(userEmail);

      if (!isEmailValid) {
        toast.error('Email tidak terdaftar. Silakan periksa alamat email Anda.', { position: 'top-center' });
        return;
      }

      const result = await emailjs.sendForm('service_o40zp7n', 'template_u7iqhsq', form.current, 'duBS4quStET9R2FG7');
      console.log(result.text);
      toast.success('Pesan terkirim. Terima kasih!', { position: 'top-center' });

      // Setelah pesan terkirim, kosongkan formulir
      form.current.user_name.value = '';
      form.current.user_email.value = '';
      form.current.message.value = '';
    } catch (error) {
      console.error(error);
      toast.error('Error mengirim pesan. Silakan coba lagi nanti.', { position: 'top-center' });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const verifyEmailOnServer = async (email) => {
    // Gantilah ini dengan implementasi sebenarnya untuk memeriksa email pada sisi server
    // Ini hanya contoh dan tidak melakukan apa-apa, Anda harus menghubungkan ke server Anda di sini
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); // Menyatakan bahwa email valid (contoh sederhana)
      }, 1000);
    });
  };

  return (
    <section className="py-[100px]" id="Contact">
      <h1 className="text-center text-7xl font-semibold text-white font-playfair mb-5">Contact Me</h1>
      <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
        {/* Name Input */}
        <label className={labelClass}>Name</label>
        <input type="text" className={inputClass} name="user_name" />

        {/* Email Input */}
        <label className={labelClass}>Email</label>
        <input type="text" className={inputClass} name="user_email" />

        {/* Message Input */}
        <label className={labelClass}>Message</label>
        <textarea name="message" className="w-[300px] mx-auto h-[300px] rounded-[20px] px-5 py-5 text-white bg-[#0D2644] md:w-[700px] border border-white mb-5 hover:border-[#bc6d38]"></textarea>

        {/* Submit Button */}
        <input type="submit" value="Send" className="w-[300px] md:w-[500px] mx-auto bg-[#bc6d38] text-white cursor-pointer py-2 px-3 rounded-[20px] text-xl" />
      </form>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
