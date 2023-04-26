import React from 'react';
import Loader from './Loader';



class Main extends React.Component {
    render() {
        if (!this.props.data) {
            return <Loader />
        }

        let info = this.props.data.items;
        return (
            <div className='container'>
                <ul className='boxes'>{
                    info.map((post, i) => {
                        return (
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
            </div>
        )
    }

}

export default Main;