import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to='/' className="btn">
        Back Home
      </Link>
      <Link to='131255524432' className="btn">
        To Error
      </Link>
    </section>
  );
};
export default About;
