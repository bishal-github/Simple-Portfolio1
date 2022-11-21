import React from 'react'
import vg from '../assests/2.webp';
import {
AiFillGoogleCircle,
AiFillAmazonCircle,
AiFillYoutube,
AiFillInstagram
} from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className='home'>
      <main>
        <h1>React Developer</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />

    <div>
        <p>
            We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
    </div>
    </div>
<div className="home3">
    <div>
        <h1>Who we are?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor tenetur necessitatibus! Exercitationem enim delectus quaerat explicabo magni architecto veniam ut alias quis, nostrum praesentium, natus ipsa vero commodi! Alias velit quia eveniet architecto itaque harum? Dolorum cumque, repudiandae consectetur qui illo illum iste numquam tempore sint consequatur soluta dignissimos excepturi fugiat quam maxime perferendis minus ipsa voluptatem ea rerum?</p>
    </div>
</div>
<div className="home4">
    <div>
        <h1>Brands</h1>
        <article>
            <div>

            </div>
        </article>
    </div>
</div>
    </>
  )
}

export default Home
