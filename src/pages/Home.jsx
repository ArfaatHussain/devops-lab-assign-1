
import '../App.css';
const Home = ()=>{
    return(
        <div id="Home" style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column'}} >
            <h2 style={{textAlign: 'center'}} >Student Management System</h2>

            <p style={{textAlign:'center',width:'70%' }} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi similique iusto unde tempore facilis fugit dolore obcaecati nobis eveniet deleniti maiores dicta, sed praesentium consequatur doloribus, nostrum ullam quia harum?</p>

            <button id='home-button' >Add Student</button>
        </div>
    )
}

export default Home