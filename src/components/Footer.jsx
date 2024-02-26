import SubscribeForm from "./SubscribeForm"

const Footer = () => {
  return (
    <>


    <div className="footer-section">
    <div className="subscribeform-div">
      <SubscribeForm/>
    </div>
      
      <div className="footer-details">
    <div className="resource">
      <h4> Join Our Community</h4>
      <div>
       <a href="https://twitter.com/mylegacytoken"><img className="social"  src="assets/xtw.png" alt="x"/></a>
       <a href="https://t.me/mylegacy_mlt"><img className="social"  src="assets/telegram.png" alt="telegram"/></a>
       <img className="social"  src="assets/playstore.png" alt="Playstore"/>
      </div>
    </div>
      </div>
      <p>© Legacy GPT All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer