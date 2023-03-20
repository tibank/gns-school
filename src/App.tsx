import React from 'react';
import './App.css';
import { ErrorMessage } from './components/common/ErrorMessage';
import { CoursesListHeader } from './components/ListHeader/CoursesListHeader';
import { AlertButton } from './components/style/AlertButton';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchCourses } from './store/reducers/CoursesFetch';

function App() {
  return (
    <div className='App'>
      <AlertButton onClick={() => console.log('click')}>OK</AlertButton>
      <ErrorMessage>There is an error</ErrorMessage>
      <CoursesListHeader />
    </div>
  );
}

export default App;
