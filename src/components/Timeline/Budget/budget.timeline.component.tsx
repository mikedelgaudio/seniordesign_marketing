const Budget = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-4xl border-b-2  border-blue-600">Budget</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-6 col-span-2 bg-gray-200 p-4 rounded-xl">
          <div>
            <h3 className="font-bold text-xl">Non-Product Related:</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li className="font-bold">
                Google Custom Domain:{" "}
                <span className="font-normal">$12.00</span>
              </li>
              <li className="font-bold">
                Adafruit IO: <span className="font-normal">$10.00/month</span>{" "}
                <small>(Free plan for testing)</small>
              </li>
              <li className="font-bold">
                Zapier: <span className="font-normal">$20.00/month</span>{" "}
                <small>(Free plan for testing)</small>
              </li>
              <li className="font-bold">
                Shipping and Tax Costs:{" "}
                <span className="font-normal">$17.76</span>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl">Prototype Per Product Costs:</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li className="font-bold">
                ESP32 Board: <span className="font-normal">$21.95</span>
              </li>
              <li className="font-bold">
                Adafruit Prop-Maker FeatherWing Accelerometer:{" "}
                <span className="font-normal">$10.95</span>
              </li>
              <li className="font-bold">
                Adafruit Mini LiPo Battery:{" "}
                <span className="font-normal">$9.95</span>
              </li>
              <li className="font-bold">
                Adafruit NexoPixel Stick:{" "}
                <span className="font-normal">$5.95</span>
              </li>
              <li className="font-bold">
                Piezo Buzzer: <span className="font-normal">$1.50</span>
              </li>
              <li className="font-bold">
                3D Printed Components:{" "}
                <span className="font-normal">$5.00</span>
              </li>
              <li className="font-bold">
                Miscellaneous Wires, Glue, etc:{" "}
                <span className="font-normal">$1.25</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col col-span-auto items-center justify-center">
          <h3>Per Product Cost</h3>
          <div className="bg-gray-200 p-10 rounded-xl border-4 border-blue-600">
            <p className=" font-extrabold text-3xl">$51.55</p>
          </div>
          <small>Price is higher due to prototyping</small>
        </div>
      </div>
    </div>
  );
};

export { Budget };
