import "./Leader.css";

const teamMembers = [
  {
    name: "Vijay Talreja",
    role: "Educationist | Angel Investor",
    quote:
      "From shaping the future of technology giants to nurturing the dreams of startups, my journey has been about empowering innovation and driving digital transformation.",
    path: "/assets/images/Vijay_Talreja.jpeg",
  },
  {
    name: "Shri. B. L. Boolani",
    role: "Trustee In-charge, VESCOP",
    quote:
      "Incubation centers are the catalysts of transformation, where dreams take root and brilliance blooms.",
    path: "/assets/images/BL_Boolani.jpg",
  },
];

const Leader = () => {
  return (
    <div className="leader-container">
      {teamMembers.map((t, index) => (
        <div className="col" key={index}>
          <div className="card">
            <img src={t.path} alt={t.name} className="image" />
            <h2>{t.name}</h2>
            <p className="role">{t.role}</p>
            <p className="quote">{t.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leader;
