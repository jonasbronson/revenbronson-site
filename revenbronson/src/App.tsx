import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import bizFlower from "./assets/bizflower.png";
import profile from "./assets/Reven-1840.jpg";
import sessionPic from "./assets/session.png";
import { useState } from "react";
import { InstagramEmbed } from 'react-social-media-embed';

const insta = <FontAwesomeIcon icon={faInstagram} />

function Bar() {
  return (
    <div style={{ backgroundColor: 'white' }} className="bar" id="home">
      <ul style={{ display: 'flex', justifyContent: 'space-evenly', padding: '0 2em', textDecoration: 'none', listStyle: 'none'}}>
        <li className="bar-item">Home</li>
        <li className="bar-item">About</li>
        <li className="bar-item">Services</li>
        <li className="bar-item">Contact</li>
      </ul>
    </div>
  );

}

function Home() {
  return (
    <>
      <div className="homePage">
        <div style={{ position: 'relative', marginTop: '2%' }}>
          <img src={profile} alt="Profile Pic" className="reven" />
          <div style={{ marginRight: '2%', textAlign: 'right', zIndex: 1, marginTop: '-20vh', marginBottom: '15vh'}}>
            <h1 style={{ fontSize: '8em', fontWeight: '600', marginBottom: '-.15em' }} className="titleText">Reven Bronson</h1>
            <h2 style={{ fontSize: '1.5em' }} className="titleText">Lomilomi, Attunement, and Craniosacral Practitioner</h2>
          </div>
        </div>
      </div>
    </>
  )

}

function About() {
  return (
    <>
      <div style={{ backgroundColor: 'white', borderRadius: '20px', margin: '20px', paddingTop: '20px', paddingBottom: '20px'}}>
        <h2 style={{ marginLeft: '4%', fontFamily: 'Zeyada', fontWeight: '600', fontSize: '5em' }}>About Reven's Practice</h2>
        <p style={{ marginLeft: '4%', fontFamily: 'Merriweather', textAlign: 'left', marginRight: '4%' }}>Reven Bronson’s healing practice began almost 30 years ago when she started her first massage apprenticeship in 1995. She then began to study lomilomi massage in 2000 and traveled to Hawaii on several occasions to immerse herself in the Hawaiian culture and lomilomi. Her teachers come from both the Aunty Margret and Kahu Abraham traditions, and she is also a student of hula. <br /> <br />


          With each trip to the islands Reven feels a sense of coming home to something deep inside her. Within the Hawaiian tradition there is a deep reverence and understanding of the interconnectedness between personal thoughts, emotions, the tissues of your body, and your relationship to family (including the community and nature). The energy of aloha (which includes in its definition consciousness, unity, authenticity, humility, and patience) allows you to feel the truth of your nature and how you are connected and participate in life. This understanding plays into the consciousness that surrounds each session as well as how each stroke is delivered and received by the body. <br /><br />


          In 2003, Reven began studying energy work starting with Reiki and including Jin Shin Jyutsu and Attunement. She is a Reiki Master and a Master Attunement practitioner. Energy work has become the glue that holds her sessions together. It creates a safe creative field between practitioner and client and allows energy pathways to open and flow bringing awareness and sustenance to what is being created or released in the session. <br /><br />


          In 2018, Reven added to her practice Craniosacral Therapy from her studies at the Upledger Institute and an apprenticeship with Chris Jorgensen, and it is now an integral part of her work. Of all that Reven has studied Craniosacral work has surprised her the most. The subtleness with which it works can have such profound effects throughout the body. <br /><br />


          Furthermore, Reven incorporates her knowledge of aromatherapy, hot stones, herbs, heart coherence, yoga, and dance into her work. <br /><br />


          Reven has worked in many venues including health club, chiropractors’ office, spa, within a group of other massage practitioners, and for the last 24 plus years as a sole proprietor. In addition, she has enjoyed teaching massage and has had the opportunity to teach within an accredited massage school (JCCC) as well as privately. Currently, Reven is on the International Association of Attunement Practitioners (IAAP) Board and teaches Attunement classes along side Sandy Karr and Erin Rivers. <br /><br /><br />


          <em>"Here in this body are the sacred rivers: here are the sun and the moon as well as all the pilgrimage places...I have not encountered another temple as blissful as my own body." - Tibetan poet, Saraha's Song of Praise</em>
        </p>
      </div>
    </>
  )
}

function Session() {

  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
      <div style={{ backgroundColor: 'white', borderRadius: '20px', margin: '20px', paddingTop: '20px', paddingBottom: '20px'}}>
        <h2 style={{ marginLeft: '4%', fontFamily: 'Zeyada', fontWeight: '600', fontSize: '5em' }}>A Session</h2>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex'}}>
            <div className="tabs" style={{flexBasis: '30%', marginLeft: '4%'}}>
              <h3 onClick={() => setTabIndex(1)} style={{color: tabIndex === 1 ? '#804885' : 'inherit', cursor: 'pointer'}}>Lomilomi</h3>
              <h3 onClick={() => setTabIndex(2)} style={{color: tabIndex === 2 ? '#804885' : 'inherit', cursor: 'pointer'}}>Attunement</h3>
              <h3 onClick={() => setTabIndex(3)} style={{color: tabIndex === 3 ? '#804885' : 'inherit', cursor: 'pointer'}}>Craniosacral Therapy</h3>
            </div>
            <div className="aboutSession" style={{flexBasis: '30%'}}>
              {
                tabIndex === 1 && (
                  <div>
                    <p>The strokes of lomilomi are rhythmical and nurturing like gentle waves clearing the beach of footprints,
                      leaving only the harmonious ebb and flow of the tide. This movement is the pulse of life, connecting you
                      to what is real and true and allowing you to let go of patterns no longer serving you.</p>
                  </div>
                )
              }
              {
                tabIndex === 2 && (
                  <div>
                    <p>Attunement brings consciousness of Being (Source energy, or Love) that allows you to feel clarity and
                      inspiration for what is necessary in this moment. It utilizes very light to no touch, hands over the body
                      working with the energy moving through the endocrine system and other organs and systems in the
                      body, always in the spirit of thankfulness.</p>
                  </div>
                )
              }
              {
                tabIndex === 3 && (
                  <div>
                    <p>Craniosacral Therapy restores balance to one of the central rhythms of our body that bathes the central
                      nervous system. It brings a sense of peace that heals many ailments physical, mental, and/or emotional
                      that is held in the body. It is practiced as a light touch that utilizes the ability to perceive the pulse of the
                      craniosacral fluid movement and where it is restricted.</p>
                  </div>
                )
              }
            </div>
            <div style={{flexBasis: '30%', marginLeft: '4%'}}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={sessionPic} alt="session" style={{width: '100%', height: 'auto', maxWidth: '30vh', borderRadius: '0.5em'}}/>
              </div>
            </div>
          </div>
          
        </div>
        <div className="closingSession" style={{marginLeft: '8%', marginRight: '8%', marginTop: "8vh"}}>
          <p>Each of these elements play a part in my work and how it all comes together, but really what I’m doing is
            listening….listening to your body and how it wants me to move. I might work in a fairly methodical way,
            but I am always waiting to feel an impulse from you as to how the session will unfold. <br /><br />
            
            Sessions are scheduled in 60 or 90 minute increments. Kids under 12 ususally come for 30 minute
            sessions.</p>
        </div>
        
        
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <div style={{backgroundColor: 'white', marginTop: '5vh', paddingBottom: '1vh'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={(bizFlower)} alt="bruh" style={{paddingBottom: '1em', width: '5em', opacity: '.5', marginRight: '1em'}}/>
            <h1 style={{fontSize: '4em', fontWeight: '600', marginBottom: '-.15em'}}>Reven Bronson</h1>
        </div> 
        <p>Contact me at: <span style={{color: '#804885'}}>rbhealingpractice@gmail.com</span></p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px'}}>
            <a
              style={{
                color: '#000000',
                transition: 'color 0.3s, transform 0.3s',
                textDecoration: 'none',
              }}
              href="https://www.instagram.com/revenbronsonhealingpractice/"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#804855';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {insta}
            </a>
          </div>
        <p>designed and built by Jonas.</p>
      </div>
    </>
  )
}

export default function App() {
    return (
      <>
        {/* <Bar /> */}
        <Home />
        <About />
        <Session />
        <Footer />
      </>
    ) }