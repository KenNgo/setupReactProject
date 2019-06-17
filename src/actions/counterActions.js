import {INCREASE, DECREASE} from './type';

export function counterIncrease() {
    return (dispatch) => {
        // show loading 
        dispatch({
            type: INCREASE
        });
    //     // call api all items
    //     axios.get('/api/items')
    //         .then(response => {
    //             // delay 2 seconds to show loading
    //             setTimeout(() => {
    //                 // show data 
    //                 dispatch({
    //                     type: 'FETCHING_DATA_SUCCESS',
    //                     data : response.data,
    //                 })                    
    //             }, 2000)
    //         })
    //         .catch(function (error) {
    //             // show error
    //             dispatch({
    //                 type: 'FETCHING_DATA_FAILURE'
    //             })
    //         })
    }
}

export function counterDecrease() {    
    return (dispatch) => {
        dispatch({
            type: DECREASE
        });
        // call api add new item
        // axios.post('/api/items', item)
        //     .then(response => {
        //         dispatch(fetchData())
        //     })
        //     .catch(function (error) {
        //         // show error
        //         dispatch({
        //             type: 'FETCHING_DATA_FAILURE'
        //         })
        //     })
    }
}