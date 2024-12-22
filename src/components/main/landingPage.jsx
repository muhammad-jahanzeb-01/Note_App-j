import React from 'react'
import '../styling/landingPage.css'
import OnAdd from '../main/add'

const landingPage = () => {



  return (
    <>
   
      <nav>
        <div className='navBar'>
          <div id='logo'><p>Snap <span style={{color:"#E5E5E5"}}>-</span> Notes</p></div>
          <div>
            <div id="hamBurger">
              <span className="lines"></span>
              <span className="lines"></span>
              <span className="lines"></span>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <div className="categories">

          <div className='category'>
            <p className='catName'>All Notes</p>
            <p className='catNum'>20</p>
          </div>

          <div className='category'>
            <p className='catName'># Work</p>
            <p className='catNum'>5</p>
          </div>

          <div className='category'>
            <p className='catName'># Personal</p>
            <p className='catNum'>8</p>
          </div>

          <div className='category'>
            <p className='catName'># Important</p>
            <p className='catNum'>3</p>
          </div>

        </div>
      </section>



  <section className="notes">
  <OnAdd />
  </section>



    </>
  )
}

export default landingPage