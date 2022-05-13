import React, { Component } from "react";

class AdminRegister extends Component {
    render() {
        return (
            <div class="container">
            <div class="row mt-5">
                <div class="col-md-6 offset-md-3">
                    <h1 class="main_title">Admin Registration</h1>
                    <form th:action="@{/admin/register}" method="post"
                        th:object="${bidder}" style="max-width: 600px;">
    
                        
                            <div class="mb-3">
                                <label for="exampleInputName" class="form-label"
                                    style="color: white;">UserName :</label> <input type="text"
                                    name="username" class="form-control" id="exampleInputUserName"
                                    aria-describedby="usernameHelp" required="required" >
                                <div class="mb-3">
                                    <label for="exampleInputpassword" class="form-label"
                                        style="color: white;">Password :</label> <input type="password"
                                        name="password" class="form-control"
                                        id="exampleInputpassword" aria-describedby="passwordHelp" required="required">
                                    
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input"
                                                id="exampleCheck1" required="required"> <label class="form-check-label"
                                                for="exampleCheck1"  style="color: white;">I agree to the sign up here</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-lg">Sign
                                            Up</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default AdminRegister;