import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import bizFlower from "./assets/bizflower.png";
import profile from "./assets/reven-desktop.jpg";
import roomPic from "./assets/session.png";
import craniosacralPic from "./assets/cranial.png";
import attunePic from "./assets/attune.png";
import revenPhone from "./assets/reven-phone.png";
import heartRocks from "./assets/rocks.png";
import jonasLogo from "./assets/jonasLogo.png";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

const insta = <FontAwesomeIcon icon={faInstagram} />

  function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
    const imageSrc = isMobile ? revenPhone : profile;

    return (
      <>
        <div className="homePage">
          <img src={imageSrc} alt="Profile Pic" className="reven"/>
          <div className="homePicFrame">
            <h1 className="homeTitle">Reven Bronson</h1>
            <h3 className="homeSubText">Lomilomi, Attunement, and <br />Craniosacral Practitioner</h3>
          </div>
        </div>
      </>
    );
  }

function About() {
  return (
    <>
      <div className="section aboutEnclosed">
        <h2 className="header">About Reven's Practice</h2>
        <div className="aboutDisplay">
          <p className="aboutBody regText">Reven Bronson’s healing practice began almost 30 years ago when she started her first massage apprenticeship in 1995 with Alice Steuerwald in Lawrence, Kansas. Shortly thereafter, she attended massage school and began to broaden her perspective of bodywork. She then found lomilomi massage in 2000 and traveled to Hawaii on several occasions to immerse herself in the Hawaiian culture and lomilomi. Her teachers come from both the Aunty Margret and Kahu Abraham traditions, and she is also a student of hula. <br /> <br />


            With each trip to the islands Reven feels a sense of coming home to something deep inside her. Within the Hawaiian tradition there is a deep reverence and understanding of the interconnectedness between personal thoughts, emotions, the tissues of your body, and your relationship to family (including the community and nature). The energy of aloha (which includes in its definition consciousness, unity, authenticity, humility, and patience) allows you to feel the truth of your nature and how you are connected and participate in life. This understanding plays into the consciousness that surrounds each session as well as how each stroke is delivered and received by the body. <br /><br />


            In 2003, Reven began studying energy work starting with Reiki and including Jin Shin Jyutsu and Attunement. She is a Reiki Master and a Master Attunement practitioner. Energy work has become the glue that holds her sessions together. It creates a safe creative field between practitioner and client and allows energy pathways to open and flow bringing awareness and sustenance to what is being created or released in the session. <br /><br />


            In 2018, Reven added to her practice Craniosacral Therapy from her studies at the Upledger Institute and an apprenticeship with Chris Jorgensen, and it is now an integral part of her work. Of all that Reven has studied Craniosacral work has surprised her the most. The subtleness with which it works can have such profound effects throughout the body. <br /><br />


            Furthermore, Reven incorporates her knowledge of aromatherapy, hot stones, herbs, heart coherence, yoga, and dance into her work. <br /><br />


            Reven has worked in many venues including health club, chiropractors’ office, spa, within a group of other massage practitioners, and for the last 24 plus years as a sole proprietor. In addition, she has enjoyed teaching massage and has had the opportunity to teach within an accredited massage school (JCCC) as well as privately. Currently, Reven is on the International Association of Attunement Practitioners (IAAP) Board and teaches Attunement classes along side Sandy Karr and Erin Rivers. <br /><br /><br />


            <em>"Here in this body are the sacred rivers: here are the sun and the moon as well as all the pilgrimage places...I have not encountered another temple as blissful as my own body." - Tibetan poet, Saraha's Song of Praise</em>
          </p>
          <img src={heartRocks} alt="work" className="aboutImg"/>
        </div>
      </div>
    </>
  )
}

function Session() {

  const [tabIndex, setTabIndex] = useState(1);

  let sessionPic;
    switch(tabIndex) {
      case 1:
        sessionPic = roomPic;
        break;
      case 2:
        sessionPic = attunePic;
        break;
      case 3:
        sessionPic = craniosacralPic;
        break;
      default:
        sessionPic = roomPic;
    }

  return (
    <>
      <div className="section">
        <h2 className="header">A Session</h2>
        <div className="sessionHolder">
          <div>
            <div className="sessionTabs" style={{display: "flex", justifyContent: "center"}}>
              <h3 onClick={() => setTabIndex(1)} style={{color: tabIndex === 1 ? '#804885' : 'inherit', textDecoration: tabIndex === 1 ? "underline" : 'inherit'}} className="sessionSelect sessionH3">Lomilomi</h3>
              <h3 onClick={() => setTabIndex(2)} style={{color: tabIndex === 2 ? '#804885' : 'inherit', textDecoration: tabIndex === 2 ? "underline" : 'inherit'}} className="sessionSelect sessionH3">Attunement</h3>
              <h3 onClick={() => setTabIndex(3)} style={{color: tabIndex === 3 ? '#804885' : 'inherit', textDecoration: tabIndex === 3 ? "underline" : 'inherit'}} className="sessionSelect sessionH3 sessionCranio">Craniosacral Therapy</h3>
            </div>
            <div className="sessionTextAndPic">
              <div className="sessionAbout">
                {
                  tabIndex === 1 && (
                    <div>
                      <p className="regText">The strokes of lomilomi are rhythmical and nurturing like gentle waves clearing the beach of footprints,
                        leaving only the harmonious ebb and flow of the tide. This movement is the pulse of life, connecting you
                        to what is real and true and allowing you to let go of patterns no longer serving you.</p>
                    </div>
                  )
                }
                {
                  tabIndex === 2 && (
                    <div>
                      <p className="regText">Attunement brings consciousness of Being (Source energy, or Love) that allows you to feel clarity and
                        inspiration for what is necessary in this moment. It utilizes very light to no touch, hands over the body
                        working with the energy moving through the endocrine system and other organs and systems in the
                        body, always in the spirit of thankfulness.</p>
                    </div>
                  )
                }
                {
                  tabIndex === 3 && (
                    <div>
                      <p className="regText">Craniosacral Therapy restores balance to one of the central rhythms of our body that bathes the central
                        nervous system. It brings a sense of peace that heals many ailments physical, mental, and/or emotional
                        that is held in the body. It is practiced as a light touch that utilizes the ability to perceive the pulse of the
                        craniosacral fluid movement and where it is restricted.</p>
                    </div>
                  )
                }
              </div>
              <div className="sessionPicFrame">
                <img src={sessionPic} alt="session" className="sessionPic"/>
              </div>
            </div>  
          </div>
        </div>
        <div className="sessionFooter">
          <p className="regText">Each of these elements play a part in my work and how it all comes together, but really what I’m doing is
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
      <div className="footerContainer">
        <div className="footerInnerContainer">
          <div className="footerCenterItems">
            <img src={(bizFlower)} alt="flower" className="footerFlower"/>
            <h1 className="footerName">Reven Bronson</h1>
          </div>
          <div className="footerInstaIcon">
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
          <p className="footerContact regText">Contact me at: <span style={{color: '#804885'}}>rbhealingpractice@gmail.com</span></p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <p style={{fontSize: '1em'}}>designed and built by
          <a href="https://jonasbronson.com" target="_blank" rel="noopener noreferrer">
            <img src={jonasLogo} alt="" className="footerJonasIcon"/>
          </a></p>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Session />
      <Footer />
    </>
  )
}