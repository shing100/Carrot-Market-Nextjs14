"use client";

import FormButton from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import {createAccount} from "@/app/create-account/actions";
import {useActionState} from "react";
import Form from "next/form";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
    const [state, dispatch] = useActionState(createAccount, null);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <Form action={dispatch} className="flex flex-col gap-3">
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    errors={state?.fieldErrors.username}
                    minLength={3}
                    maxLength={10}
                />
                <Input name="email" type="email" placeholder="Email" errors={state?.fieldErrors.email} />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    minLength={PASSWORD_MIN_LENGTH}
                    required
                    errors={state?.fieldErrors.password}
                />
                <Input
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    minLength={PASSWORD_MIN_LENGTH}
                    errors={state?.fieldErrors.confirm_password}
                />
                <FormButton text="Create account" />
            </Form>
            <SocialLogin />
        </div>
    );
}