import React from 'react'
import { Swtich, Route, Link, Routes} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies, News } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/> 
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Swtich>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Swtich>
                    </div>
                </Layout>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App
