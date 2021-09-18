import React from 'react';
import { useSelector } from 'react-redux';
import {paginate} from './../utils/paginate';
import ListInput from './listInput';
import Pagination from './pagination';
import ListGroup from './listGroup';
import SearchBar from './searchBar';
import _ from 'lodash';



const Students = () => {
    const students = useSelector(state => state);
    
    const genders = [{name:'All Genders', value:'All Genders' },{name:'Male', value: 'Male'}, {name:'Female', value: 'Female'}, {name:'Other', value:'Other'}];
    const courses = [{name:'All Courses', value:'All Courses' },{name:'React', value: 'React'}, {name: 'Angular', value:  'Angular'}, {name:'Vue', value:'Vue'}];
    const sortingValues = [{name:'First Name', value: 'first_name'}, {name:'Post Code', value: 'postCode'}];

    const pageSizes = [20,30,50];
    const [pageSize, setPageSize] = React.useState(20);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [selectedGender, setSelectedGender] = React.useState(genders[0].value);
    const [selectedCourse, setSelectedCourse] = React.useState(courses[0].value);
    const [selectedSortingValue , setSelectedSortingValue] = React.useState(sortingValues[0].value);
    const [searchQuery, setSearchQuery] = React.useState('');
    
    const updateField = e => {
        setPageSize(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        setCurrentPage(1);
        setSearchQuery('');
    }

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setCurrentPage(1);
        setSearchQuery('');
    }

    const handleSortingValueSelect = (sortingValue) => {
        setSelectedSortingValue(sortingValue);
        setCurrentPage(1);
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
        setSelectedCourse('All Courses');
        setSelectedGender('All Genders');
    }

    const filtered = searchQuery ? students.filter( s => 
        s.first_name.toLowerCase().startsWith(searchQuery.toLowerCase()) ): 
        selectedGender === genders[0].value && selectedCourse === courses[0].value? students: 
        selectedGender !== genders[0].value && selectedCourse === courses[0].value ? students.filter(s => s.gender === selectedGender):
        selectedGender === genders[0].value && selectedCourse !== courses[0].value ? students.filter(s => s.course === selectedCourse):
        students.filter(s => s.gender === selectedGender && s.course === selectedCourse) ;              
    const sorted = _.orderBy(filtered, [selectedSortingValue], ['asc']);
    const paginatedStudents = paginate(sorted, currentPage, pageSize);
    
    return ( 
        <>
        <h1>Students</h1> 
         <p style={{color: '#3e88f7', fontSize: 14, fontWeight: 'bold'}}>(You see {sorted.length} of the {students.length} students registered)</p>
        
         <SearchBar value={searchQuery} onChange={handleSearch}/>

         <div className="customContainer">
             <div className="customFilters">
                 <ListGroup label="Filter by Gender:" items={genders} selectedItem={selectedGender} onItemSelect={handleGenderSelect} /> 
                 <ListGroup label="Filter by Course:" items={courses} selectedItem={selectedCourse} onItemSelect={handleCourseSelect} />
                 <ListGroup label="Sort By:" items={sortingValues} selectedItem={selectedSortingValue} onItemSelect={handleSortingValueSelect}/>
             </div>
             <div className="customTable">
             <table>
                 <thead>
                     <tr>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email</th>
                         <th>Course</th>
                         <th>City</th>
                         <th>Post Code</th>
                         <th>Gender</th>
                         <th>Subscription to newsletter</th>
                     </tr>
                 </thead>
                 <tbody>
                     {paginatedStudents.map( (student,index) => 
                      <tr key={index}>
                             <td>{student.first_name}</td>
                             <td>{student.last_name} </td>
                             <td> {student.email}</td>
                             <td>{student.course}</td>
                             <td>{student.city}</td>
                             <td>{student.postCode}</td>
                             <td>{student.gender}</td>
                             <td>{student.subscription === false ? 'No ': 'Yes'}</td>
                     </tr>)}
                 </tbody> 
              </table> 
              </div>
         </div>
         <div className="row">
             <div className="col-2">
                 <ListInput label="students per page" name="pageSize" value= {pageSize} onChange ={updateField} options={pageSizes}/>
                 <Pagination itemsCount={sorted.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange}/>
            </div>
         </div> 
        </>
     );
}
 
export default Students;