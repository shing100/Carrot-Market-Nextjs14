"use client";

import { useFormStatus } from 'react-dom'

interface FormButtonProps {
    text: string;
}

export default function FormButton({ text }: FormButtonProps) {
    const status = useFormStatus();
    return (
        <button
            disabled={status.pending}
            className="primary-btn h-10 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
        >
            {status.pending ? "로딩 중" : text}
        </button>
    );
}