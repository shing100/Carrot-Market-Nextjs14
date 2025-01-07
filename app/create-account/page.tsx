"user client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import {createAccount} from "@/app/create-account/actions";
import {useActionState} from "react";
import Form from "next/form";

export default function CreateAccount() {
    const [state, dispatch] = useActionState(createAccount, null);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <Form action={dispatch} className="flex flex-col gap-3">
                <FormInput name="username" type="text" placeholder="Username" errors={state?.fieldErrors.username}/>
                <FormInput name="email" type="email" placeholder="Email" errors={state?.fieldErrors.email} />
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    errors={state?.fieldErrors.password}
                />
                <FormInput
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    errors={state?.fieldErrors.confirm_password}
                />
                <FormButton text="Create account" />
            </Form>
            <SocialLogin />
        </div>
    );
}