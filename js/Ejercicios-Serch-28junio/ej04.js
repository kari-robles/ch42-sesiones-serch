console.log("holix4");

const student1Courses = ['Math', 'English', 'Programming'];

const student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = [];
for (let course1 of student1Courses ){
    console.log( course1 ); 
    for(let course2 of student2Courses ){
        if( course1 === course2) commonCourses.push( course1 );
    }
}
console.log("Cursos en común: " +  commonCourses.join(", ")  );


// ========== resolviendo con filter e include
// const commonCourse2 = student1Courses.filter( course1 =>  student2Courses.includes(course1) );
// console.log( commonCourse2 );