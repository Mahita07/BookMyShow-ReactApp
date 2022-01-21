import "./Onlineevents.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function Onlineevents() {
  return (
    <div style={{ marginBottom: "30px", background: "whitesmoke" }}>
      <h3 style={{ padding: "15px" }}>Online Streaming Events</h3>
      <Carousel>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "space-around",
            }}
          >
            <Card class="card border-light mb-3" style={{ width: "250px" }}>
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOCBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00145636-bjwpshvcfr-portrait.jpg"
              />
              <Card.Body style={{ background: "whitesmoke" }}>
                <Card.Title>
                  Make An E-Commerce App Like Amazon, Flipkart
                </Card.Title>
                <Card.Text>Watch on Zoom</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOCBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312316-xcszwxvlqk-portrait.jpg"
              />
              <Card.Body style={{ background: "whitesmoke" }}>
                <Card.Title>Ultimate Beginner Guitar Masterclass</Card.Title>
                <Card.Text>Watch on Zoom</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131211-gexprwvkcq-portrait.jpg"
              />
              <Card.Body style={{ background: "whitesmoke" }}>
                <Card.Title>Art and Craft Online Workshop</Card.Title>
                <Card.Text>Watch on Zoom</Card.Text>
              </Card.Body>
            </Card>
            <Card class="card border-light mb-3">
              <Card.Img
                variant="top"
                style={{ height: "400px", borderRadius: "15px" }}
                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOCBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307978-ybvsfbqsgp-portrait.jpg"
              />
              <Card.Body style={{ background: "whitesmoke" }}>
                <Card.Title>
                  Smartphone Photography - Unleash the Pro Mode
                </Card.Title>
                <Card.Text>Watch on Zoom</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Onlineevents;
