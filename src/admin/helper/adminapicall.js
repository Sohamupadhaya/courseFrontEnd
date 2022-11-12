import { API } from "../../backend";

// export const createCourse = (userId, token, course)=>{
//     return fetch(`${API}course/${userId}`,{
//         method: "POST",
//         headers: {
//             Accept:"application/json",
//             Authorization:`Bearer ${token}`
//         },
//         body:JSON.stringify(course)
//     })
//     .then(response=>{
//         return response.json();
//     })
//     .catch(err => console.log(err))
// }

export const createCourse = (userId, token, course) => {
    const formData = new FormData();
  
    for (const name in course) {
      console.log(course[name]);
      formData.append(name, course[name]);
    }
  
    // const {email, password} = user;
    // const formData = new FormData();
    // formData.append('email', email)
    // formData.append('password', password)
  
    for (var key of formData.keys()) {
      console.log("MYKEY: ", key);
    }
  
    return fetch(`${API}course/`, {
      method: "POST",
  
      body: formData,
    })
      .then((response) => {
        console.log("SUCCESS", response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };


export const getCourses = () =>{
    return fetch(`${API}course/allcourses/`,{
        method: "GET"
    }).then(response=>{return response.json()})
    .catch(err => console.log(err))
}

export const getCoursesById = (courseId) =>{
    return fetch(`${API}course/courses/${courseId}`,{
        method: "GET"
    }).then(response=>{return response.json()})
    .catch(err => console.log(err))
}

export const updateCourse = (courseId, userId, token, course)=>{
    return fetch(`${API}course/${courseId}/${userId}`,{
        method: "PUT",
        headers: {
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(course)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err => console.log(err))
}

export const deleteCourse = (courseId, userId, token)=>{
    return fetch(`${API}course/deleteCourse/${courseId}/${userId}`,{
        method: "DELETE",
        headers: {
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(response=>{
        return response.json();
    })
    .catch(err => console.log(err))
}