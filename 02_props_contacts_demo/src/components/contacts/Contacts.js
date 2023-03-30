import "./Contacts.css";
export function Contacts({ img, name, phone, email }) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={img} alt="a goddamn cat" />
        <h3>{name}</h3>
        <div className="info-group">
          <img
            src="https://source.unsplash.com/random/?phone,icon"
            alt="phone icon"
          />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img
            src="https://source.unsplash.com/random/?mail,icon"
            alt="mail icon"
          />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
