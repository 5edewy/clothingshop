import React from "react";
import CustomButtom from "../custom-buttom/custom-buttom.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emai: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            emai: '',
            password: ''
        })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        const { email, password } = this.state
        return (
            <div className="sign-in">
                <h2>I Already Have An Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type={"email"}
                        value={email}
                        required={true}
                        handleChange={this.handleChange}
                        label="Email"

                    />

                    <FormInput
                        name="password"
                        type={"password"}
                        value={password}
                        required={true}
                        handleChange={this.handleChange}
                        label="Password"

                    />

                    <CustomButtom >
                        Sign in
                    </CustomButtom>
                </form>
            </div>
        )
    }
}
export default SignIn;