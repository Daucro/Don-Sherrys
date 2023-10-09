import SliderShow from "@/app/components/carouselamenities";
import "../amenities/amenities.css";

export default function Amenities() {
  return (
    <>
      <SliderShow />
      <main className="Amenities">
        <h1></h1>
        <div>
          <h2 className="CenterPage">Games Games Games</h2>
          <p className="Paragraph">
            Indoors is a sports bar style game room with lots of fun! The game
            room includes two pool tables (7ft and 8ft) , shuffle board , and
            darts!" The pool tables are kept in great condition given their age.
            The shuffle board is always waxed and the darts are ready to go.
            Outside there is plenty of sitting area for family functions or a
            get together. Theres a cement padding with a basketball hoop and a
            playing for washers (similar to cornhole).
          </p>
        </div>
        <h2 className="CenterPage">Parking Space</h2>
        <p className="Paragraph">
          Multi acre lot allows for plenty of parking ! Room for RVs , trailers
          , and boats to be parked safely. A widened gate makes it easy to bring
          everything inside for safekeeping and outside when it is time to have
          fun. A special note for boats is that our location is less then 10
          minutes from a loading ramp.
        </p>
        <h2 className="CenterPage">Bed and Breakfast</h2>
        <p className="Paragraph">
          It should be implied because of the name but you can never forget the
          food. Booking with us allows you to not only have your adventures
          nearby but also to get rid of one hassle of traveling which is
          cooking. People eat out or have to worry about cooking meals in a new
          environment. Booking with us you can eat hometown cooking by Sherry
          "Need Anything" Waller. Trust us because she got that name for a
          reason. Last but not least theres always coffe in the pot. Stays
          includes breakfast and dinner accomadations depending on size. See the
          menu page for regularly served meals and photographs.
        </p>
      </main>
    </>
  );
}
