import React from 'react';
import {Component} from 'react';

// function compoent
// const SearchBar = ()=>{
//     return <input />;
// }

// class based component
class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state ={'type':''};
    }
    render(){
        // return <input onChange ={this.onInputChange}/>;
        // return <input onChange={event =>console.log(event.target.value) } />;
        return(
            <div className="search-bar">
                <input value={this.state.type} onChange={event=>this.onInputChange(event.target.value)} />
            </div>
        );
    }
    onInputChange(term){
        this.setState({type:term});
        this.props.onSearchtermChange(term);
    }
}
export default SearchBar;