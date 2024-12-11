import marker from "../images/marker.png";

export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        {/*main-image-container for the css object-fit property */}

        <img
          className="main-image"
          src={props.destination.img.src}
          alt={props.destination.img.alt}
        />
      </div>

      <div>
        <img className="marker" src={marker} alt="marker pin" />
        <span className="country"> {props.destination.country} </span>
        <a href={props.destination.googleMapsLink}>View on Google maps</a>
        <h2 className="entry-title">{props.destination.title}</h2>
        <p className="trip-date">{props.destination.dates}</p>
        <p className="entry-text">{props.destination.text}</p>
      </div>
    </article>
  );
}
