import React,{Component} from 'react';
import GenreButtonContainer from '../../components/GenreButton';
import GenreCards from '../../components/Search/GenreCards'


class Dashboard extends Component {
    render() {
        return(
            <div>
                Sign in to view the cards
                <GenreButtonContainer />
            </div>
        )
    }
    
}

export default Dashboard;