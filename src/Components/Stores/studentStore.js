
import { decorate, observable, computed } from "mobx";
import instance from "./instance";

class studentStore{
    courses=[];
    semesters=[];
    requests=[];
    departments=[];
    studentID="15000";
    headID="";
    headRequests=[];
    getCourses = async (data) => {
        console.log(data)
        const department={
            department:data
        }
        
        try {
          const res = await instance.get("course/filter?department="+data);
          const newCourses = res.data;
          this.courses = newCourses;
          console.log(newCourses);
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
getDepartments= async () =>{
    try{
        const res = await instance.get("department/");
        const departments = res.data;
        this.departments=res.data;
        
    }catch(error){
        console.log(error);
    }
}
postRequest= async (data) =>{

    const param={
        courseName:data.courseName,
        studentID:this.studentID,
        department:data.studentID,
        semester:data.semester,
        description:data.description,
        headID:data.headID

    }

   
    // headID = heads.get(data.studentID);


    try{
        const res=await instance.post("request/student",param);
        console.log("success")
    }catch(error){

    }
}
getRequests = async () => {
    try {
      const res = await instance.get("request/student?studentID="+this.studentID);
      const requests = res.data;
      console.log(requests)
      this.requests=requests;
    } catch (error) {
      console.log(error);
    }
  };
  getHeadRequests= async () =>{
    try {
      const res = await instance.get("request/AllHeads");
      const requests = res.data;
      console.log(requests)
      this.headRequests=requests;
    } catch (error) {
      console.log(error);
    }
  }
  getRequestById= id =>{
    console.log(id)
    return this.headRequests.find(request => request.id == id);
  }
  submitRequest= async (request,selection)=>{
    let newRequest={};
    if (selection=="yes"){
      const value=request.yes+1;
    newRequest={
      id:request.id,
      yes:value,
      no:request.no,
      unsure:request.unsure,
    }
  }
  else if (selection=="no"){
    const value=request.no+1;
    newRequest={
      id:request.id,
      yes:request.yes,
      no:value,
      unsure:request.unsure,
    }
  }
  else {
    const value=request.unsure+1;
    newRequest={
      id:request.id,
      yes:request.yes,
      no:request.no,
      unsure:value,

    }
  }
    console.log(newRequest);
  try {
    const res = await instance.put("request/vote",newRequest);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }

  
}
}
decorate(studentStore,{
    courses:observable,
    semesters:observable,
    requests:observable,
    departments:observable,
    headRequests:observable
  })
const StudentStore=new studentStore();
StudentStore.getDepartments();
StudentStore.getRequests();
StudentStore.getHeadRequests();
export default StudentStore;