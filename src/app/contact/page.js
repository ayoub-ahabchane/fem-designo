import Locations from "@/components/Locations";
import Form from "@/components/contact/Form";
import React from "react";

const page = () => {
  return (
    <section className="pageWrapper flex flex-col md:gap-[7.5rem]">
      <Form />
      <Locations />
    </section>
  );
};

export default page;
