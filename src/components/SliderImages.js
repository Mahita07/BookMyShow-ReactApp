import Carousel from "react-bootstrap/Carousel";
function SliderImages() {
  return (
    <div>
      <Carousel
        style={{ height: "40%", width: "100%", marginRight: "0px" }}
        variant="dark"
      >
        <Carousel.Item>
          <img
            style={{ height: "300px", width: "1300px" }}
            className="d-block "
            src="https://in.bmscdn.com/promotions/cms/creatives/1642418591375_our_ladies.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px", width: "1300px" }}
            className="d-block "
            src="https://in.bmscdn.com/promotions/cms/creatives/1641894791882_webbas.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
