import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

function App() {
  const dataComponents = data.map((destination) => {
    return (
      <Entry
        key={destination.id}
        destination={destination}
        // {...destination}  //passing object as prop
        // img={destination.img}
        // title={destination.title}
        // country={destination.country}
        // googleMapsLink={destination.googleMapsLink}
        // dates={destination.dates}
        // text={destination.text}
      />
    );
  });
  return (
    <>
      <Header />
      {dataComponents}
    </>
  );
}

export default App;

{
  /* <Entry
        img={{
          src: "https://scrimba.com/links/travel-journal-japan-image-url",
          alt: "Mt Fuji",
        }}
        title="Mount Fuji"
        country="Japan"
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      /> */
}
