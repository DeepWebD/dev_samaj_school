/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const SchoolContext = createContext();

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};

export const SchoolProvider = ({ children }) => {
  const [selectedSchoolName, setSelectedSchoolName] = useState('nehruNagar');

  const updateSchoolName = (schoolName) => {
    setSelectedSchoolName(schoolName);
  };

  return (
    <SchoolContext.Provider value={{ selectedSchoolName, updateSchoolName }}>
      {children}
    </SchoolContext.Provider>
  );
};
