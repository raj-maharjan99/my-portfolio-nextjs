import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="py-4 bg-red-600">
        {" "}
        <h2 className="">Home page</h2>
      </div>

      <Button>Home</Button>
      <Slider defaultValue={[20]} max={100} step={1} />
    </div>
  );
};

export default Home;
