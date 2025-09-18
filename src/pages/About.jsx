
import '../App.css';
const About = ()=>{
    return(
        <div id="About" style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column'}} >
            <h2>About</h2>

            <p style={{width:'60%'}} >Welcome to the Student Management System (SMS), a platform designed to simplify and enhance the way educational institutions manage their student information. Our system provides a centralized solution to handle student records, academic progress, attendance, and communication in an efficient and user-friendly manner.</p>

            <p style={{width:'60%'}}>
                The purpose of this system is to bridge the gap between administrators, teachers, students, and parents by offering real-time access to accurate information. By reducing manual work and automating routine processes, the Student Management System allows institutions to focus more on quality education and less on administrative complexity.
            </p>

            <p style={{width:'60%'}}>
                We believe in innovation, transparency, and efficiency. The platform ensures secure data handling, smooth performance, and a structured workflow that benefits all stakeholders. Whether it is tracking student performance, generating reports, or maintaining discipline through attendance records, SMS provides a reliable solution to support academic excellence.
            </p>

            <p style={{width:'60%'}}>
                Our mission is to empower educational institutions with technology that makes learning and management seamless. With continuous improvements and user-centric features, the Student Management System aims to contribute toward building smarter schools, colleges, and universities.
            </p>

        </div>
    )
}

export default About