import portrait from "../../images/Rectangle_90.png";
import './header.css'
export function Header() {
  return (
    <header>
      <img src={portrait} alt="human_female_portrait" />
      <div className="headerText">
        <div className="profile">
          <h1>Laura Smith</h1>
          <h3>Frontend Developer</h3>
          <p>laurasmith.website</p>
        </div>

        <div className="buttons">
          <button><i className="fa-solid fa-envelope"></i>Email</button>
          <button><i class="fa-brands fa-linkedin"></i>Linkedin</button>
        </div>
      </div>
    </header>
  );
}
