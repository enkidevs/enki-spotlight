export default function search(state = { }, action) {
    state["enki_insights"] = action.payload.map(function(el) {
        let insight = {};
        insight["Title"] = el.headline;
        insight["Link"] = el.links[0].url;
        return insight;
    });
    
    console.log("The reducer from hell");
    console.log(state);
    
    return state; 
}