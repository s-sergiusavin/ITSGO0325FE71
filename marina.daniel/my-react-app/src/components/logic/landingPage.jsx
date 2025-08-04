import asdasd from '../../assets/pictures/asdasd.jpeg'
import './landingPage.scss'


function LandingPage() {
  return (
    <div>
      <header>
        <button
          onClick={() => (window.location.href = "/")}
          style={{ marginTop: "1rem", background: "none" }}
        >
          Go to Main Page
        </button>
        
        <h1>
          <span>The Best</span> Summer Party
        </h1>
        <p className="headerDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          distinctio dicta repellat, voluptatem eveniet atque provident quae
          ipsa quod sint corporis sed eligendi minus dolorem perferendis
          recusandae, fuga nesciunt debitis. Dignissimos odit harum facere
          eaque, ipsum ut cupiditate placeat cum a, quaerat repellat nisi ipsam
          aut quis architecto eligendi ullam.
        </p>
        <div className="formContainer">
          <form action="">
            <label htmlFor="name">Enter Your name</label>
            <input type="text" id="name" placeholder="Your Name" />
            <p>Example : Marina Daniel</p>
            <input type="button" defaultValue="Book Now" id="CallToAction" />
          </form>
        </div>
      </header>
      <section className="callToAction" id='callToAction'>
        <div className="callToActionMessage" id='callToActionMessage'>
          <h2>Enjoy the Party</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            veritatis repudiandae et ratione animi odit, illum quia sed
            voluptatem ipsum voluptatibus ex aperiam velit provident facere amet
            sit dicta possimus cupiditate quidem saepe impedit perferendis
            accusamus. Consequatur nam aliquid, natus ratione reiciendis
            repellendus accusantium accusamus officia, maxime omnis fugit
            molestiae hic pariatur tempora, rem sapiente quidem sit. Nulla
            dolorum libero quam laboriosam reprehenderit. Quis aliquid nisi quo
            corrupti mollitia ullam, unde nesciunt suscipit dolore totam,
            veritatis ad quod nulla eius sunt libero optio saepe atque officiis
            sapiente ea iste quasi architecto? Temporibus, iste nihil. Et eaque
            blanditiis beatae ipsum magni?
          </p>
          <img src={asdasd} alt="" />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
