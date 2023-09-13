/* eslint-disable react/no-unescaped-entities */
import programsData from "/assets/data/programs.json";
import "./style.css";

export default function AllPrograms() {
  return (
    <div>
      <div className="list">
        {programsData.programs.map((item) => (
          <a key={item.color} data-aos="fade-up" className="work-tile">
            <div className="background">
              <img
                src={`/assets/images/${item.image}`}
                alt="HABIT Program Image"
              />
            </div>
            <div className="foreground">
              <div
                className="brand-colour"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="top">
                <div className="stat">{item.stat}</div>
              </div>
              <div className="bottom">
                <div className="type">{item.type}</div>
                <div className="client">{item.client}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
