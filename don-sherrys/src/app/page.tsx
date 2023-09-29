import Image from "next/image";
import styles from "./page.module.css";
import SlideShow from "./components/carousel";

export default function Home() {
  return (
    <main>
      <SlideShow />
      <h2 className="Center">SMALL TOWN GETAWAY WITH BIG ADVENTURE</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </p>
      <div className="BookingContainer">
        <div className="BookingLeftTop">
          <img src="https://picsum.photos/351/351" />
          <p className="CenterParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
        </div>
        <div className="BookingLeftBottom">
          <img src="https://picsum.photos/351/351" />
          <p className="CenterParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
        </div>
        <img className="BookingPhoto" src="https://picsum.photos/714/482" />
      </div>
      <div className="BookingContainer2">
        <div className="BookingContainer2Left">
          <img src="https://picsum.photos/714/351" />
        </div>
        <div className="BookingContainer2Center">
          <img src="https://picsum.photos/351/351" />
        </div>
        <p className="BookingParagraph">What you need when you need it</p>
      </div>
      <div className="BookingContainer3">
        <div className="BookingContainer3Left">
          <p className="BookingParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <img src="https://picsum.photos/351/351" />
        </div>
        <div className="BookingContainer3Right">
          <p className="BookingParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <img src="https://picsum.photos/351/351" />
        </div>
      </div>
      <div className="BookingContainer4">
        <div className="BookingContainer4Left">
          <img src="https://picsum.photos/574/430" />
        </div>
        <div className="BookingContainer4Center">
          <img src="https://picsum.photos/574/430" />
        </div>
        <div className="BookingContainer4Right">
          <img src="https://picsum.photos/574/430" />
        </div>
      </div>
    </main>
  );
}
