import React from 'react';
import UserList from '../containers/userList.js'; 
import UserDetails from '../containers/userDetails.js'; 
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList /> 
        <hr />
        <h2>User Details</h2>
        <UserDetails /> 
    </div>
);

export default App;
