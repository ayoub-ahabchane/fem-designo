import React from "react";
import Canada from "./svg/Canada";
import Link from "next/link";
import Australia from "./Australia";
import UnitedKingdom from "./svg/UnitedKingdom";

const Locations = () => {
  return (
    <ul className="grid auto-cols-fr grid-flow-row auto-rows-fr gap-y-12 gap-x-[1.875rem] py-[7.5rem] md:py-0 lg:grid-flow-col">
      <li className="flex flex-col items-center gap-12">
        <Canada />
        <div className="flex flex-col items-center gap-8">
          <h3 className="h3">Canada</h3>
          <Link className="button light" href={"/locations#ca"}>
            See location
          </Link>
        </div>
      </li>
      <li className="flex flex-col items-center gap-12">
        <Australia />
        <div className="flex flex-col items-center gap-8">
          <h3 className="h3">Australia</h3>
          <Link className="button light" href={"/locations#au"}>
            See location
          </Link>
        </div>
      </li>
      <li className="flex flex-col items-center gap-12">
        <UnitedKingdom />
        <div className="flex flex-col items-center gap-8">
          <h3 className="h3">United Kingdom</h3>
          <Link className="button light" href={"/locations#uk"}>
            See location
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default Locations;
