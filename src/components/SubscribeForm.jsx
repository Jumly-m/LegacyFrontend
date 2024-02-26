

const SubscribeForm = () => {
  return (
    <div className="form-section">
    <h6 className="formtitle">Subscribe to our News Letter</h6>
    <form>
    <div className="formcontainer">
      <input placeholder="Your Email Address" className="input-subscribe" name="email" type="email"/>
   <button className="button-submit">Subscribe</button> 
    </div>
    </form>
    </div>

  )
}

export default SubscribeForm