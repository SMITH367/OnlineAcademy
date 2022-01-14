import {
    FetchData
} from "../components/services/fetchData";


const useGetCourse = async (url, course, setDataCourses) => {
    const getData = new FetchData(url + "/" + course);
    const courses = await getData.FetchDataApiGet();
    console.log(courses);
    if (courses !== null && courses !== undefined && courses !== false)
        setDataCourses(courses[0]);
};

export {
    useGetCourse
}