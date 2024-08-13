import React from "react";

const AboutQuick = () => {
  return (
    <div className="section " >
      
      <div>
        <div className="text-bold text-2xl text-center">
          Why <span className="font-extrabold  italic ml-1">QuickYES</span>{" "}
          <br />{" "}
          <span className="text-sm text-bold flex-row ml-11  ">
            INFOTECH PVT. LTD.
          </span>
        </div>
        <div className="md:flex items-center justify-center mt-3">
          <div className="row w-[80%]">
            <div className="col-sm-6 ">
              <div className="card ">
                <div className="card-body bg-blue-400">
                  <ul class="list-group list-group-flush gap-4 ">
                    <li className="list-group-item  border rounded ">100% Job Guarantee</li>
                    <li className="list-group-item border rounded">Instant Dout Solving</li>
                    <li className="list-group-item border rounded">Strong Placement Record</li>
                    <li className="list-group-item border rounded">Personalized Career Coach</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="card w-[100%]">
              <div className="card-body bg-blue-400">
                  <ul class="list-group list-group-flush gap-4">
                    <li className="list-group-item border rounded">Learning Manegment Platform</li>
                    <li className="list-group-item border rounded">Live Intracting Learning Program</li>
                    <li className="list-group-item border rounded">Portfolio Prepration</li>
                    <li className="list-group-item border rounded">80% Practical Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutQuick;
