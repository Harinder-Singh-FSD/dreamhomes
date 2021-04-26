import React from "react";
import { Row, Col } from "react-bootstrap";
const ListRendering = ({ list }) => {
  console.log(list);
  return (
    <div className="dropdown dropdown-menu-right" style={{ display: "inline" }}>
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {list.listHeader}
      </button>

      <hr />
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "left",
          }}
        >
          {list.listSubHeader.map((item) => {
            return (
              <Col>
                <h5>{item.header}</h5>
                <div>
                  <ul>
                    {item.listItems.map((listitem) => {
                      return <li className="dropdown-item">{listitem}</li>;
                    })}
                  </ul>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
export default ListRendering;
