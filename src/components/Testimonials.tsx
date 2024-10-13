import { IMAGES } from '../Images/images'

export const Testimonials = () => {
  return (
    <section className="section-testimonials">
          <h4>Client testimonials</h4>
          <div className="testimonial-grid">
            <div className="testimonials-grid-item">
              <img src={IMAGES.desktop.testimonialEmily} alt="Emily" />
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <strong>Emily R.</strong>
              <span>Marketing Director</span>
            </div>

            <div className="testimonials-grid-item">
              <img src={IMAGES.desktop.testimonialThomas} alt="Thomas" />
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <strong>Thomas S.</strong>
              <span>Chief Operating Officer</span>
            </div>

            <div className="testimonials-grid-item">
              <img src={IMAGES.desktop.testimonialJennie} alt="Jennie" />
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <strong>Jennie F.</strong>
              <span>Business Owner</span>
            </div>
          </div>
        </section>
  )
}
