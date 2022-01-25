import {
    FetchData
} from "../components/services/fetchData";


const useGetCourse = async (url, course, setDataCourses) => {
    const getData = new FetchData(url + "/" + course);
    const courses = await getData.FetchDataApiGet();

    if (courses[0] !== null && courses[0] !== undefined && courses[0] !== false)
        setDataCourses(courses[0]);
};

export {
    useGetCourse
}