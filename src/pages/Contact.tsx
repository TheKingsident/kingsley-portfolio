import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <section id="contact" className="relative flex flex-col min-h-screen w-full px-8 md:px-16 py-12 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" />
          Get in touch
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-4xl text-gray-900">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Phone Card */}
          <div className="flex items-center gap-4 bg-white/30 px-6 py-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-500 rounded-lg">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="text-sm text-gray-500">+1-202-555-0135</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-center gap-4 bg-white/30 px-6 py-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-500 rounded-lg">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
              <p className="text-sm text-gray-500">hello@example.com</p>
            </div>
          </div>
        </div>
        {/* Send Message Section */}
        <div className="mt-5">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Send Message</h3>
          <form className="flex flex-col gap-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white/70 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
            />

            {/* Message */}
            <textarea
              placeholder="Your message here..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/70 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit px-6 py-3 bg-orange-300/50 text-orange-500 font-medium rounded-2xl shadow-sm hover:text-orange-500 hover:scale-95 transition-transform duration-200"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact