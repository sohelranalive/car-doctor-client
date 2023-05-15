import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="rounded-lg shadow-2xl w-2/3" />
                    <img src={parts} className="rounded-lg shadow-2xl w-1/2 absolute top-32 left-52 border-8 border-white" />
                </div>
                <div className="lg:w-1/2 p-4 space-y-5">
                    <h1 className='text-orange-500 font-extrabold text-2xl'>About Us</h1>
                    <h1 className="text-5xl font-bold w-8/12">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                        <br /><br />
                        The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;