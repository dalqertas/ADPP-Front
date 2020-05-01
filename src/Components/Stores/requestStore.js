
import { decorate, observable} from "mobx";
import instance from "./instance";

class requestStore {
  courses = [];
  semesters = [];
  requests = [];
  studentRequests=[];
  userID = "alqertas.d";
  department="Math";
  loading=true;
  generate;

  getCourses = async () => {
    try {
      const res = await instance.get("course/");
      const newCourses = res.data;
      this.courses = newCourses;
      console.log(this.courses);
    } catch (error) {
      console.log(error);
    }
  };
  getSemesters = async () => {
    try {
      const res = await instance.get("course/semester");
      const semesters = res.data;
      this.semesters = semesters;
    } catch (error) {
      console.log(error);
    }
  };
  getRequests = async () => {
    try {
      const res = await instance.get("request/head?headID=alqertas.d");
      const requests = res.data;
      this.requests = requests.filter(request =>
        request.headID.includes(this.userID)
      );
      this.loading=false;
    } catch (error) {
      console.log(error);
    }
  };
  postRequest = async param => {
    console.log("inside store",param)
    const date=new Date();
    const newData = {
      courseName:param.courseName,
      description:param.description,
      semester:param.semester,
      headID: this.userID,
      date:date.toISOString().substring(0,10)
    };
    const res = await instance.post("request/",newData);
    console.log(res)
  };
  getStudentRequests = async ()=>{
    try {
      const res = await instance.get("request/headByStudent?headID=alqertas.d");
      const studentRequests = res.data;
      this.studentRequests = studentRequests;
      console.log(this.studentRequests);
    } catch (error) {
      console.log(error);
    }
  }
  denyRequest= async (request)=>{
    const newRequest={
      id:request.id,
      courseName:request.courseName,
      studentID:request.studentID,
      description:request.description,
      headID:request.headID,
      yes:request.yes,
      no:request.no,
      department:request.department,
      studentsNo:request.studentsNo,
      unsure:request.unsure,
      status:"Denied",
      semester:request.semester,
      date:request.date
    }
    
    console.log(newRequest);
    try {
      const res = await instance.put("request/",newRequest);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
approveRequest= async (request)=>{
  const newRequest={
    id:request.id,
    courseName:request.courseName,
    studentID:request.studentID,
    description:request.description,
    headID:request.headID,
    yes:request.yes,
    no:request.no,
    department:request.department,
    studentsNo:request.studentsNo,
    unsure:request.unsure,
    status:"Approved",
    semester:request.semester,
    date:request.date
  }
  
  console.log(newRequest);
  try {
    const res = await instance.put("request/",newRequest);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
generateCourses= async ()=>{
  try {
    const res = await instance.get("generate/");
    const generate=res.data;
    this.generate=generate;

  } catch (error) {
    console.log(error);
  }
}
    
  
  get Courses() {
    return this.courses;
  }
  get Semesters() {
    return this.semesters;
  }
  getRequestById= id =>{
    console.log(id)
    return this.requests.find(request => request.id == id);
  }
  getStudentRequestById= id =>{
    console.log(id)
    return this.studentRequests.find(request => request.id == id);
  }

}
decorate(requestStore,{
  courses:observable,
  semesters:observable,
  requests:observable,
  studentRequests:observable,
  generate:observable
})
const RequestStore = new requestStore();
RequestStore.getCourses();
RequestStore.getSemesters();
RequestStore.getRequests();
RequestStore.getStudentRequests();
RequestStore.generateCourses();
export default RequestStore;
