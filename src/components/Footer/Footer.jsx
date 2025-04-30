import './Footer.css'
export default function Footer() {
    return (
      <>
     <footer>
      
        <div className="links">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="col">
          <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
          </ul>
        </div>
        <div className="col">
          <ul>
              <li>Help Center</li>
              <li>Contact</li>
              <li>Privacy</li>
          </ul>
        </div>
        <div className="col"> 
          <ul>
              <li>Terms & Conditions</li>
              <li>Support</li>
              <li>Site Map</li>
          </ul>
        </div>
    </footer>
      </>
    )
  }
  