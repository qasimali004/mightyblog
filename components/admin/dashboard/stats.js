import Link from "next/link";
import { AiFillDashboard } from "react-icons/ai";


export default function stats() {
  return (
    <>
      <div className="row stats-section pl-4 pr-4">
        <div className="col-lg-3 stats p-1" >
          <div className="stat-card p-3">
            <div className="stat">
            <span className="h1">5</span>
            <span>Today visitors</span>
            </div>
            <AiFillDashboard size="40px" className="icon ml-auto" />
          </div>
        </div>
        <div className="col-lg-3 stats p-1" >
          <div className="stat-card p-3">
            <div className="stat">
            <span className="h1">5</span>
            <span>Today visitors</span>
            </div>
            <AiFillDashboard size="40px" className="icon ml-auto" />
          </div>
        </div>
        <div className="col-lg-3 stats p-1" >
          <div className="stat-card p-3">
            <div className="stat">
            <span className="h1">5</span>
            <span>Today visitors</span>
            </div>
            <AiFillDashboard size="40px" className="icon ml-auto" />
          </div>
        </div>
        <div className="col-lg-3 stats p-1" >
          <div className="stat-card p-3">
            <div className="stat">
            <span className="h1">5</span>
            <span>Today visitors</span>
            </div>
            <AiFillDashboard size="40px" className="icon ml-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
