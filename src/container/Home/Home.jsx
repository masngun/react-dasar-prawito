import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';

class Home extends Component {
    render () {
        return(
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Tutorial React JS - Bagian 1"
                    desc="2x ditonton. 2 hari yang lalu"/>
                <YoutubeComp 
                    time="8.02" 
                    title="Tutorial React JS - Bagian 2" 
                    desc="100x ditonton. 1 hari yang lalu"/>
                <YoutubeComp 
                    time="5.04" 
                    title="Tutorial React JS - Bagian 3"
                    desc="30x ditonton. 17 hari yang lalu"/>
                <YoutubeComp 
                    time="4.12" 
                    title="Tutorial React JS - Bagian 4"
                    desc="500x ditonton. 1 hari yang lalu"/>
                <YoutubeComp/>
            </div>
        )
    }
}

export default Home