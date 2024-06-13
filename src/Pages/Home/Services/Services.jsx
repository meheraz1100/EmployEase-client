import { useEffect, useState } from "react";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  const [dataLength, setDataLength] = useState(6);
  return (
    <section>
      <SectionHeading
        heading={"Services"}
        subHeading={"Get Best from Us"}
      ></SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.slice(0, dataLength).map((service) => (
          <div
            className="card lg:card-side bg-base-100 shadow-xl"
            key={service._id}
          >
            <figure>
              <img src={service.img_url} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.service_name}</h2>
              <div className="card-actions">Type: {service.service_type}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={dataLength === services.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(services.length)}
          className="btn text-2xl my-6 justify-center w-full"
        >
          Show All Services
        </button>
      </div>
    </section>
  );
};

export default Services;
