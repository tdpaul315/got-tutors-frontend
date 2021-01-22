export const fetchTutors = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/tutors')
        .then(resp => resp.json())
        .then(tutors => {
            dispatch({ type: "LIST_TUTORS", payload: tutors })
        })
    }
}


export const addTutor = tutor => {
    return(dispatch) => {
        return fetch('http://localhost:3000/tutors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tutor:tutor})
        })
        .then(resp => resp.json())
        .then(tutor => {
            dispatch({ type: "ADD_TUTOR", payload: tutor })
        })
    }
}


export const removeTutor = tutorID => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/tutors/${tutorID}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(tutor => {
            dispatch({ type: "REMOVE_TUTOR", payload: tutor.id })
        })
    }
}






// export const fetchSessions = () => {
//     return(dispatch) => {
//         return fetch('http://localhost:3000/sessions')
//         .then(resp => resp.json())
//         .then(sessions => {
//             dispatch({ type: "LIST_SESSIONS", payload: sessions })
//         })
//     }
// }
