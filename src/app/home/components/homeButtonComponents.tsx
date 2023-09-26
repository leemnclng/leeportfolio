interface BasicButtonProps {
    title: string;
    disabled: boolean;
    onClickButton ?: () => void;
}

export function DownloadButton({title, disabled, onClickButton}: BasicButtonProps) {
    return (
        <button onClick={onClickButton} disabled={disabled}>{title}</button>
    )
}