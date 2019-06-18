import React, { Component } from 'react';
import axios from 'axios';
import { SearchBar } from './components/SearchBar/';
import { UserList } from './components/UserList/';
import { ImageList } from './components/ImageList';

import './index.css';

class App extends Component  {
    state = {
        users: [],
        images: [],
        userSearched: false,
        imageSearched: false,
    };

    onUserSearch = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/users', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5'
            }
        })

        this.setState({ users: response.data.results, images: [], userSearched: true, imageSearched: false })
    }

    onUserSelect = async (username) => {
        const response = await axios.get(`https://api.unsplash.com/users/${username}/photos`, {
            headers: {
                Authorization: 'Client-ID aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5'
            }
        })

        this.setState({ images: response.data, imageSearched: true })
    }

    render() {
        const { users, images, userSearched, imageSearched } = this.state

        return (
            <div className="wrapper">
                <main>
                    <nav className="side__bar d-flex flex-column">
                        <SearchBar userSearch={this.onUserSearch} />
                        <UserList userSelect={this.onUserSelect} users={users} searched={userSearched} />
                    </nav>
                    <div className="container-fluid">
                        <ImageList images={images} searched={imageSearched} />
                    </div>
                </main>
                <footer className="mt-auto py-3">
                    <div className="container text-center">
                        Zion @ 2019
                    </div>
                </footer>
            </div>
        )
    }

}

export default App;