import React from 'react';
import Loader from './Loader';

class SingleLanguage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data: null,
        }
    }

    componentDidMount(){
        let language = this.props.match.params.language;

        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`)
        .then(res => res.json())
        .then((data) => this.setState({data}));
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.language !== prevProps.match.params.language){
            let language = this.props.match.params.language;
            fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((data) => this.setState({data}));
        }
    }

    render(){
       if(!this.state.data){
        return <Loader/>
       }
       let info = this.state.data.items;
       return (
        <ul className='boxes'>{
            info.map((post, i) => {
                return(
                    <li className='box'>
                        <div>
                            <h2># {i + 1}</h2>
                            <img src={post.owner.avatar_url} alt=""></img>
                            <h3>{post.name}</h3>
                            <div>
                                <p>{post.name}</p>
                            </div>
                            <div>
                                <p>{post.stargazers_count} STAR</p>
                            </div>
                            <div>
                                <p>{post.forks} FORK</p>
                            </div>
                            <div>
                                <p>{post.open_issues_count} OPEN ISSUE</p>
                            </div>
                        </div>
                    </li>
                )
            })
            }</ul>
       )
    }
}


export default SingleLanguage;