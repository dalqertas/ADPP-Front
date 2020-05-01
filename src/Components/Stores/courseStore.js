
import { decorate, observable} from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class courseStore {
    semsters=[];
    springCourses=[];
    summerCourses=[];
    loading=true;
    
    getSemesters = async () => {
        try {
          const res = await instance.get("course/semester");
          const semesters = res.data;
          this.semesters = semesters;
          this.loading=false;
        } catch (error) {
          console.log(error);
        }
      };
      getSpringCourses= async (semester)=>{

          
          try{
              const res = await instance.get("course/head?headID=alqertas.d&semester=Spring")
              const courses=res.data;
              this.springCourses=courses;
              console.log(courses);
              return courses;
          }catch(error){
              console.log(error);
          }
      }
      getSummerCourses= async (semester)=>{

        
        try{
            const res = await instance.get("course/head?headID=alqertas.d&semester=Summer")
            const courses=res.data;
            this.summerCourses=courses;
            console.log(courses);
            return courses;
        }catch(error){
            console.log(error);
        }
    }
    modifyCourse = async (course,offered,crSemester)=>{
        console.log(course);
        console.log(offered);
        let value=0;
        if (offered){
            value=1;
        }
        const newData={
            courseName:course.courseName,
            semester:crSemester,
            offered:value
        }
        
        try{
            const res = await instance.put("course/",newData)
         
        
            console.log(res.data);

        }catch(error){
            console.log(error);
        }
        
    }
    };
   

decorate(courseStore,{

    semesters:observable,
    summerCourses:observable,
    springCourses:observable

  })
  const CourseStore = new courseStore();

  CourseStore.getSemesters();
  CourseStore.getSpringCourses();
  CourseStore.getSummerCourses();

  export default CourseStore;