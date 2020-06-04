// write and export your action creator function here
export const fetchCats = () =>{
    return (dispatch) => {
        dispatch({type: 'START_ADDING_ASTRONAUTS_REQUEST' });
        
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => response.json())
        .then(cats => dispatch({type: 'ADD_CATS', cats}))
    };
}