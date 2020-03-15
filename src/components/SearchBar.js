import React, { useEffect } from 'react';
import './css/SearchBar.css';



export default function SearchBar(){
    useEffect(() => {
        // Event listerner fortyping in search bar
        document.getElementById('searchBar').addEventListener('input', (e) => {
            if(e.target.innerText.length > 0){
                (async () => {
                    fetch(`https://schedge.torchnyu.com/2020/su/search?query=${e.target.innerText}&limit=5`)
                        .then(response => response.json())    // one extra step
                        .then(data => {
                            document.getElementById('searchResults').innerHTML = (data.map(course => (
                                `<div class="course">
                                    ${course.subjectCode.school}-${course.subjectCode.code} ${course.deptCourseId}:
                                    ${course.name}
                                </div>`
                            )) + '').replace(/,/g, '');
                        })
                        .catch(error => console.error(error));
                })();
            } else {
                // Remove search resoluts
            }
        });
    }, []);

    return(
        <>
            <div id="searchBar" contentEditable="true" placeholder="Search Courses">

            </div>
            <div id="searchResults"></div>
        </>
    )
}