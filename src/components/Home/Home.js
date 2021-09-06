import React from 'react';
import './Home.css';
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function home() {
    return (
        <Home>
            <Title>
                <h1>Adventor</h1>
            </Title>
            <Search>
                <input placeholder="shitt" id="search" />
            </Search>
            <Profile>
                <AccountCircleIcon />
            </Profile>

        </Home>
    )
}

export default home

const Home = styled.div``
const Title = styled.div``
const Search = styled.div``
const Profile = styled.div``
