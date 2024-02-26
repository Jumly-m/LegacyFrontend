import Header from "./Header"
//import { Link } from "react-router-dom"
import Footer from "./Footer"
import Writing from "./Typewriter"
import { Link } from "react-router-dom"






const Home = () => {
  return (
    <>
    <Header/>
      <div className="home">
         <div className="title-section">
             <h1 className="title"><strong> <Writing/></strong></h1>
         </div>
      
         <div className="cards-section">
         <div className="grouped-card">
         <div className="card-container">
         
          <div className="card">
            <p>"Legacy GPT enable you to ask complex prompt regarding any crypto projects and AI aligorithm in Blockchain escpecially AI intergation in Blockchain projects "</p>
          </div>
         </div>
          
          <div className="card-container">
        
          <div className="card">
    
            <p>"Faster and reliable answers from Legacy GPT ,trained with wide resources about crypto and AI projects"</p>
          </div>
          </div>
         </div>
      
         <div className="grouped-card">
         <div className="card-container">
        
          <div className="card">
    
            <p>"Faster and reliable answers from Legacy GPT ,trained with wide resources about crypto and AI projects"</p>
          </div>
          </div>
        
          <div className="card-container try-card">
          <h6></h6>
          <div className="card try">
             <Link to="/legacy">
             <button className="cta">
             <span>TRY OUR AI NOW </span>
             <svg viewBox="0 0 13 10" height="10px" width="15px">
             <path d="M1,5 L11,5"></path>
             <polyline points="8 1 12 5 8 9"></polyline>
           </svg>
         </button>
         </Link>
          </div>
          </div>
          
          </div>
        
         
         </div>
        
         
      </div>
      <Footer/>
    </>
  )
}

export default Home