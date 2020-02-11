import axios from "axios";

class requestStore {
  courses;
  getCourses = async () => {
    try {
      const res = await axios.get("http://192.168.43.24:3000/course/");
      const courses = res.data;
      this.courses = courses;
    } catch (error) {
      console.log(error);
    }
  };
}
const RequestStore = new requestStore();
//RequestStore.getCourses();
export default RequestStore;
