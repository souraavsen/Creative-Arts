import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // accessing data from the json file of fakedata 
    fetch("./Data.json")
      .then((res) => res.json())
      // load data into courses state
      .then((data) => setCourses(data));
  }, []);

  // returning th courses state in a array to access from other components
  return [courses];
};

// exporting so that other components can import
export default useCourses;
