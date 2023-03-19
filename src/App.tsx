import React, { useEffect } from 'react';
import './App.css';
import { CoursesListHeader } from './components/ListHeader/CoursesListHeader';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchCourses } from './store/reducers/CoursesFetch';

function App() {
    return (
        <div className='App'>
            <CoursesListHeader />
        </div>
    );
}

export default App;
