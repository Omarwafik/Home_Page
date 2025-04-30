import './Home.css'
import myimage from '../../img/jacket.png'
export default function Home() {
  return (
    <>
      <main>
          <div className="container">
            <div className="left">
              <h1>Welcome to <br/> Noiré Store </h1>
              <p>we are talented developers for making website with react</p>
              <button>get started</button>
            </div>
            <div className="right">
              <div className="img">
                <img src={myimage} alt="" />
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
