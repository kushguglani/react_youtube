import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyBaBaNR_rqasN3jbZso0Oor-a7AE6yLVsI';

//root  component
class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo : ""
         };

       this.searchTerm('himani');
    }
    searchTerm(term){
        YTSearch({key:API_KEY,term},(videos)=>{
            this.setState({videos,selectedVideo:videos[0]});        
          });
    }
    render(){
        let serchAfterTime = _.debounce((term)=>{this.searchTerm(term)},300)
        return(
            <div>
                <SearchBar onSearchtermChange = {serchAfterTime}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                 onVideoSelect ={selectedVideo=>this.setState({selectedVideo})}
                 videos={this.state.videos}/>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.querySelector('.container'));