function AdminProfile() {
    return (<div>Admin</div>);
}

function UserProfile() {
    return (<div>User</div>);
}

export default function Profile({admin}) {
    /*
    //use  expression
    return (<div>
        {admin ? <AdminProfile/> : <UserProfile/>}
    </div>);
    */

    /* use statement

      if(admin){
            return (<div><AdminProfile/></div>)
        }
        else{
            return (<div><UserProfile/></div>)
        }*/



    /*return    admin && <AdminProfile/>*/

    let currentProfile;
    if( admin ){
        currentProfile=<AdminProfile/>
    }else{
        currentProfile=<UserProfile/>
    }
    return (<div>
        Is  Admin?  {admin && 'Yes  it is admin'}
        {currentProfile}
    </div>);


}
