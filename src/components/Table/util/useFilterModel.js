import { useState, useEffect } from 'react';

function useFilterModel(tableName) {
    const [filterModel, setFilterModel] = useState({ items: [] });
    const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  
    const filterName = `${tableName}Filter`;
    const filterColumnVis = `${tableName}ColumnVis`;
  
    // Function to handle filter model changes
    const handleFilterModelChange = (newFilterModel) => {
        setFilterModel(newFilterModel);
        localStorage.setItem(filterName, JSON.stringify(newFilterModel));
    };
  
    // Function to handle column visibility changes
    const handleColumnVisibilityModelChange = (newModel) => {
        setColumnVisibilityModel(newModel);
        localStorage.setItem(filterColumnVis, JSON.stringify(newModel));
    };
  
    // Effect to load saved filter and column visibility models from localStorage
    useEffect(() => {
        const savedFilterModel = localStorage.getItem(filterName);
        const savedColumnVisibility = localStorage.getItem(filterColumnVis);
    
        if (savedFilterModel) {
            setFilterModel(JSON.parse(savedFilterModel));
        }
        if (savedColumnVisibility) {
            setColumnVisibilityModel(JSON.parse(savedColumnVisibility));
        }
    }, [filterName, filterColumnVis]);
  
    // Return everything needed from this hook
    return {
        filterModel,
        columnVisibilityModel,
        handleFilterModelChange,
        handleColumnVisibilityModelChange,
    };
}

export default useFilterModel;
