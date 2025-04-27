import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <section id="contact" className="relative flex flex-col min-h-screen w-full px-8 md:px-16 py-12 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" />
          Get in touch
      </div>

    </section>
  )
}

export default Contact